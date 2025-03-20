import { Request, Response, NextFunction } from "express";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    // Verify token logic (e.g., JWT verification)
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};