import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

const register = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body);
        if (!token) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        res.status(200).json({ token: token });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

const AuthController = {
    register,
    login
}

export default AuthController;