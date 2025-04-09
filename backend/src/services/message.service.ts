import MessageRepository from "../repositories/message.repository";
// import ChatRepository from "../repositories/chat.repository";
import openAIRepository from "../repositories/openAI.repository";
// import { ChatDto } from "../models/dtos/chat.dto";
import { MessageDto } from "../models/dtos/message.dto";
import { OpenAIMessageDto } from "../models/dtos/openAIMessage.dto";
import { Message } from "../models/entities/message.entity";

const getMessageResponse = async (message: MessageDto): Promise<MessageDto> => {
    if (!message.chatId || message.chatId == 0) throw new Error("Chat ID is required.");

    // const chat = await ChatRepository.getById(message.chatId);

    // if (!chat) throw new Error("Chat not found.");

    const messages = await MessageRepository.getByChatId(message.chatId);

    // chat.messages = messages;

    const openAIMessages: OpenAIMessageDto[] = messages.map((msg) => ({
        role: msg.role as 'user' | 'assistant' | 'system',
        content: msg.content
    }));

    openAIMessages.push({
        role: 'user',
        content: message.content
    });
    const openAIResponse = await openAIRepository.getChatResponse(openAIMessages);

    if (!openAIResponse) throw new Error("No response from OpenAI.");

    const newMessage: MessageDto = {
        chatId: message.id!,
        content: openAIResponse,
        role: 'assistant',
        createdBy: message.createdBy,
        updatedBy: message.updatedBy,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        isArchived: false
    }

    // Convert MessageDto to Message
    const messageEntity: Message = {
        uniqueId: crypto.randomUUID(),
        chatId: newMessage.chatId,
        content: newMessage.content,
        role: newMessage.role as 'user' | 'assistant' | 'system',
        createdBy: newMessage.createdBy,
        updatedBy: newMessage.updatedBy,
        createdAt: newMessage.createdAt,
        updatedAt: newMessage.updatedAt,
        isActive: newMessage.isActive,
        isArchived: newMessage.isArchived
    };

    const createdMessage = await MessageRepository.create(messageEntity);

    if (!createdMessage) throw new Error("Message not created.");

    // chat.messages?.push(createdMessage);

    const messageResponse: MessageDto = {
        id: createdMessage.id,
        uniqueId: createdMessage.uniqueId,
        chatId: createdMessage.chatId,
        content: createdMessage.content,
        role: createdMessage.role as 'user' | 'assistant' | 'system',
        createdBy: createdMessage.createdBy,
        updatedBy: createdMessage.updatedBy,
        createdAt: createdMessage.createdAt,
        updatedAt: createdMessage.updatedAt,
        isActive: createdMessage.isActive,
        isArchived: createdMessage.isArchived
    }

    return messageResponse;
}

const MessageService = {
    getMessageResponse
}

export default MessageService;