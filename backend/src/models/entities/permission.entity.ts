import { BaseEntity } from "../common/baseEntity";

export interface Permission extends BaseEntity {
    name: string;
    description?: string;
}