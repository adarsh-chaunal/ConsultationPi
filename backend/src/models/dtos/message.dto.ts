import { ChatDto } from "./chat.dto";

export interface MessageDto {
    id: number;
    uniqueId: string;
    chatId: number;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    isActive: boolean;
    Chat: ChatDto;
}