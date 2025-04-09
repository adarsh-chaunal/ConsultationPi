import { BaseEntity } from "../common/baseEntity";
import { Message } from "./message.entity";
import { User } from "./user.entity";

export interface Chat extends BaseEntity {
    userId: number;
    name: string;
    user?: User;
    messages?: Message[];
}