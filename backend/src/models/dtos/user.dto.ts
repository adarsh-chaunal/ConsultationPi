export interface UserDto {
    id?: number;
    uniqueId?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    isActive: boolean;
}