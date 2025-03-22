import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(err.statusCode).json({ message: "Internal Server Error" });
};