import { BaseEntity } from "../common/baseEntity";
import { Chat } from "./chat.entity";

export interface Message extends BaseEntity {
    chatId: number;
    content: string;
    role?: 'user' | 'assistant' | 'system';
    chat?: Chat;
}