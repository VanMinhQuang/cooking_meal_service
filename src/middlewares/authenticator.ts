import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY  || '';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1]; 
  if (!token){
     res.status(401).json({ message: "Unauthorized" });
     return;
  } 

  try {
    jwt.verify(token, SECRET_KEY) as { userId: string };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};