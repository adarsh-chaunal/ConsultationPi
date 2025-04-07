import { Request, Response, NextFunction } from 'express';

export const loggingHandler = (req: Request, res: Response, next: NextFunction) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
 
    next();
}