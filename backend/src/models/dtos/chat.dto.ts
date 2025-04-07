import { UserDto } from "./user.dto";

export interface ChatDto {
    id?: number;
    uniqueId?: string;
    userId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    isActive: boolean;
    user?: UserDto;
}