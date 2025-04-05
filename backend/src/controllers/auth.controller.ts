import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const token = await loginUser(req.body);
        if (!token) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        res.status(200).json({ token: token });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}