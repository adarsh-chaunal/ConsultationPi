import OpenAI from 'openai'
import { Chat } from '../models/entities/chat.entity';
import db from '../config/db';
import { ChatQueryHolder } from './constants/chat.queryHolder';

const openai = new OpenAI();

const create = async (chat: Chat): Promise<Chat> => {
    const createdChat = db.oneOrNone<Chat>(
        ChatQueryHolder.CREATE,
        [chat.uniqueId, chat.userId, chat.name, chat.createdBy, chat.createdAt, chat.updatedBy, chat.updatedAt, chat.isActive, chat.isArchived]
    );

    if (!createdChat) throw new Error("Chat not created.");

    return createdChat;
}

const update = async (chat: Chat): Promise<Chat> => {
    const updatedChat = db.oneOrNone<Chat>(
        ChatQueryHolder.UPDATE,
        [chat.name, chat.updatedBy, chat.updatedAt, chat.isActive, chat.isArchived, chat.uniqueId]
    );

    if(!updatedChat) throw new Error("Chat not updated.");

    return updatedChat;
}

const ChatRepository = {
    create,
    update
}

export default ChatRepository;