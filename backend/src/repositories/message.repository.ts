import db from '../config/db';
import { Message } from '../models/entities/message.entity';
import { MessageQueryHolder } from './constants/message.queryHolder';

const create = async (message: Message): Promise<Message> => {
    const createdMessage = await db.oneOrNone<Message>(
        MessageQueryHolder.CREATE,
        [
            message.uniqueId,
            message.chatId,
            message.content,
            message.createdBy,
            message.createdAt,
            message.updatedBy,
            message.updatedAt,
            message.isActive
        ]
    );

    if (!createdMessage) throw new Error("Message not created.");

    return createdMessage;
}

const update = async (message: Message): Promise<Message> => {
    const updatedMessage = await db.oneOrNone<Message>(
        MessageQueryHolder.UPDATE,
        [
            message.content,
            message.updatedBy,
            message.updatedAt,
            message.isActive,
            message.uniqueId
        ]
    );

    if (!updatedMessage) throw new Error("Message not updated.");

    return updatedMessage;
}

const getByUniqueId = async (uniqueId: string): Promise<Message | null> => {
    const message = await db.oneOrNone<Message>(
        MessageQueryHolder.GET_BY_UNIQUE_ID,
        [uniqueId]
    );

    return message;
}

const getById = async (id: number): Promise<Message | null> => {
    const message = await db.oneOrNone<Message>(
        MessageQueryHolder.GET_BY_ID,
        [id]
    );

    return message;
}

const getByChatId = async (chatId: number): Promise<Message[]> => {
    const messages = await db.manyOrNone<Message>(
        MessageQueryHolder.GET_BY_CHAT_ID,
        [chatId]
    );

    return messages;
}

const MessageRepository = {
    create,
    update,
    getByUniqueId,
    getById,
    getByChatId
}

export default MessageRepository;