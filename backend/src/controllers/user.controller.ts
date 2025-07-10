import { NextFunction, Request, Response } from "express";
import { createUserService, signInService } from "../services/user.service";
import { logger } from "../config/logger.config";
import { StatusCodes } from "http-status-codes";

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
    const response = await signInService(req.body);
    logger.info("User signed in successfully!");
    res.status(StatusCodes.OK).json({
        token: response
    });
}