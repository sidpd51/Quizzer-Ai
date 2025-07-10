import { NextFunction, Request, Response } from 'express';
import { TokenExpiredError } from 'jsonwebtoken';
import { getUserById } from '../repositories/user.repository';
import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from '../services/token.service';
import { UnauthorizedError } from '../utils/errors/app.error';

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
    };
}

export const authenticateMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    const refreshToken = req.cookies?.refreshToken;
    try {
        if (!accessToken) {
            if (!refreshToken) {
                throw new UnauthorizedError('No access token or refresh token provided');
            }

            const decodedRefreshToken = verifyRefreshToken(refreshToken) as { id: string };
            const user = await getUserById(decodedRefreshToken.id);

            if (!user) {
                throw new UnauthorizedError('User not found');
            }

            const newAccessToken = await generateAccessToken(refreshToken);
            const newRefreshToken = await generateRefreshToken(user.id);

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.setHeader('X-New-Access-Token', newAccessToken);

            req.user = { id: user.id, email: user.email };
            return next();
        }

        const decodedAccessToken = verifyAccessToken(accessToken) as { id: string };
        const user = await getUserById(decodedAccessToken.id);

        if (!user) {
            throw new UnauthorizedError(`User not found with id: ${decodedAccessToken.id}`);
        }

        req.user = { id: user.id, email: user.email };
        next();
    } catch (error) {
        if (error instanceof TokenExpiredError && refreshToken) {
            try {
                const decodedRefreshToken = verifyRefreshToken(refreshToken) as { id: string };
                const user = await getUserById(decodedRefreshToken.id);

                if (!user) {
                    throw new UnauthorizedError('User not found');
                }

                const newAccessToken = await generateAccessToken(refreshToken);
                const newRefreshToken = await generateRefreshToken(user.id);

                res.cookie('refreshToken', newRefreshToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                });

                res.setHeader('X-New-Access-Token', newAccessToken);

                req.user = { id: user.id, email: user.email };
                return next();
            } catch (refreshError) {
                throw new UnauthorizedError("Invalid refresh token");
            }
        }
    }
};