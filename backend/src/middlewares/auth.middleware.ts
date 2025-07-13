import { NextFunction, Request, Response } from 'express';
import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from '../services/token.service';
import { UnauthorizedError } from '../utils/errors/app.error';
import { getUserByIdService } from '../services/user.service';
import { TokenExpiredError } from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
    };
}

export const authenticateMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    let accessToken = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined;
    if (accessToken === 'null' || accessToken === 'undefined') {
        accessToken = undefined;
    }
    const refreshToken = req.cookies?.refreshToken;
    try {
        if (!accessToken) {
            if (!refreshToken) {
                throw new UnauthorizedError('No access token or refresh token provided');
            }
            const decodedRefreshToken = verifyRefreshToken(refreshToken) as { id: string };
            const user = await getUserByIdService(decodedRefreshToken.id);
            if (!user) {
                throw new UnauthorizedError('User not found');
            }
            const newAccessToken = await generateAccessToken(user.id);
            res.setHeader('X-New-Access-Token', newAccessToken);
            req.user = { id: user.id, email: user.email };
            return next();
        }

        const decodedAccessToken = verifyAccessToken(accessToken) as { id: string };
        const user = await getUserByIdService(decodedAccessToken.id);

        if (!user) {
            throw new UnauthorizedError(`User not found with id: ${decodedAccessToken.id}`);
        }

        req.user = { id: user.id, email: user.email };
        next();
    } catch (error) {
        console.log(error);
        if(error instanceof UnauthorizedError) throw error;
        
        if (error instanceof TokenExpiredError && refreshToken) {
            try {
                console.log("Got Expired Token");
                const decodedRefreshToken = verifyRefreshToken(refreshToken) as { id: string };
                const user = await getUserByIdService(decodedRefreshToken.id);

                if (!user) {
                    throw new UnauthorizedError('User not found');
                }

                const newAccessToken = await generateAccessToken(decodedRefreshToken.id);
                res.setHeader('X-New-Access-Token', newAccessToken);

                req.user = { id: user.id, email: user.email };
                return next();
            } catch (refreshError) {
                throw new UnauthorizedError("Invalid refresh token");
            }
        }
    }
};