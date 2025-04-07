import { Request, Response, NextFunction } from 'express';

export const authenticationHandler = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token || token !== 'Bearer TOKEN') {
        res.status(401).json({ message: 'Unauthorized' });
    }
    else {
        next();
    }
} 