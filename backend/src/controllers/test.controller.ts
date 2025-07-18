import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createTestService } from "../services/test.service";

export const createTestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const test = await createTestService(req.body);
    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Test created successfully",
        data: test
    });
}