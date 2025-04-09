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

    if (!updatedChat) throw new Error("Chat not updated.");

    return updatedChat;
}

const getByUniqueId = async (uniqueId: string): Promise<Chat | null> => {
    const chat = await db.oneOrNone<Chat>(
        ChatQueryHolder.GET_BY_UNIQUE_ID,
        [uniqueId]
    );

    return chat;
}

const getById = async (id: number): Promise<Chat | null> => {
    const chat = await db.oneOrNone<Chat>(
        ChatQueryHolder.GET_BY_ID,
        [id]
    );

    return chat;
}

const getAllByUserId = async (userId: number): Promise<Chat[]> => {
    const chats = await db.manyOrNone<Chat>(
        ChatQueryHolder.GET_ALL_BY_USER_ID,
        [userId]
    );

    return chats;
}

const getAllWithMessages = async (userId: number): Promise<Chat[]> => {
    const chats = await db.manyOrNone<Chat>(
        ChatQueryHolder.GET_ALL_WITH_MESSAGES_BY_USER_ID,
        [userId]
    )

    return chats;
}

const getWithMessages = async (chatId: number): Promise<Chat | null> => {
    const chat = await db.oneOrNone<Chat>(
        ChatQueryHolder.GET_WITH_MESSAGES_BY_CHAT_ID,
        [chatId]
    );

    return chat;
}


const ChatRepository = {
    create,
    update,
    getByUniqueId,
    getById,
    getAllByUserId,
    getAllWithMessages,
    getWithMessages
}

export default ChatRepository;