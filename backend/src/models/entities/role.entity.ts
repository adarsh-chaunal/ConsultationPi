import { BaseEntity } from "../common/baseEntity";

export interface Role extends BaseEntity {
    name: string;
    description?: string;
}