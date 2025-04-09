import { ChatDto } from "./chat.dto";

export interface MessageDto {
    id?: number;
    uniqueId?: string;
    chatId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    isActive: boolean;
    role?: 'user' | 'assistant' | 'system';
    Chat?: ChatDto;
}