import { NextFunction, Request, Response } from "express";
import { createUserService, getUserByIdService, signInService } from "../services/user.service";
import { logger } from "../config/logger.config";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../utils/errors/app.error";
import { validate as isValidUUID } from "uuid";
import { AuthRequest } from "../middlewares/auth.middleware";

export const signUpHandler = async (req: Request, res: Response, next: NextFunction) => {
    const user = await createUserService(req.body);
    logger.info("User registered successfully!");
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "User registered successfully",
        data: user
    });
}

export const signInHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken, accessToken } = await signInService(req.body);
    logger.info("User signed in successfully!");
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(StatusCodes.OK).json({ accessToken });
}

export const getUserInfoHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!isValidUUID(req.user?.id)) {
        throw new BadRequestError("Id is not a valid uuid!");
    }
    const user = await getUserByIdService(req.user!.id);
    logger.info(`Successfully got user info with id: ${req.user!.id}`);
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Successfully got user info",
        data: user
    });
}