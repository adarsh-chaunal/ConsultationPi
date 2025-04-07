import { ChatDto } from "../models/dtos/chat.dto";
import { Chat } from "../models/entities/chat.entity";
import ChatRepository from "../repositories/chat.repository";

const create = async (chat: ChatDto) : Promise<ChatDto> => {

    let newChat : Chat = {
        uniqueId: crypto.randomUUID(),
        userId: chat.userId,
        name: chat.name,
        createdBy: chat.createdBy,
        createdAt: new Date(),
        updatedBy: chat.updatedBy,
        updatedAt: new Date(),
        isActive: true,
        isArchived: false
    };

    

    newChat = await ChatRepository.create(newChat); 
    return newChat;
}

const update = async (chat: ChatDto) : Promise<ChatDto> => {
    
    if(!chat.uniqueId) throw new Error("Chat uniqueId is required to update chat");

    let newChat : Chat = {
        id: chat.id,
        uniqueId: chat.uniqueId,
        userId: chat.userId,
        name: chat.name,
        createdBy: chat.createdBy,
        createdAt: chat.createdAt,
        updatedBy: chat.updatedBy,
        updatedAt: new Date(),
        isActive: chat.isArchived,
        isArchived: chat.isActive
    }

    newChat = await ChatRepository.update(newChat);

    return newChat;
}

const chatService = {
    create,
    update
}

export default chatService;