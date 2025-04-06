export interface BaseEntity {
    id?: number;
    uniqueId: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    isArchived: boolean;
    isActive: boolean;
}