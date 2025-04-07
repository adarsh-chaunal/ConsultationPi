import { Request, Response } from 'express';
import ChatService from '../services/chat.service';

const create = async (req: Request, res: Response) => {
    try {
        const chat = await ChatService.create(req.body);
        if (!chat) {
            res.status(400).json({ error: 'Chat not created' });
            return;
        }
        res.status(201).json(chat);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const chat = await ChatService.update(req.body);
        if (!chat) {
            res.status(400).json({ error: 'Chat not updated' });
            return;
        }
        res.status(200).json({ message: 'Chat updated successfully' });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}

const ChatController = {
    create,
    update
}

export default ChatController;