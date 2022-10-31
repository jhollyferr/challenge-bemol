import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { ITokenPayload } from "../types/config";

dotenv.config();

export const AuthMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void | Response => {
  try {
    const { authorization } = request.headers;

    if (!authorization) return response.send().status(401);

    const token = authorization.replace("Bearer", "").trim();
    const data = jwt.verify(token, String(process.env.JWT_SECRET));

    const { id } = data as ITokenPayload;

    request.user_id = id;

    return next();
  } catch {
    return response.sendStatus(401);
  }
};
