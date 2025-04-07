import { BaseEntity } from "../common/baseEntity";
import { User } from "./user.entity";

export interface Chat extends BaseEntity {
    userId: number;
    name: string;
    user?: User;
}