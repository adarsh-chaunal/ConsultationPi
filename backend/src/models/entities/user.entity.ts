import { BaseEntity } from "../common/baseEntity";
import { Address } from "./address.entity";
import { File } from "./file.entity";
import { Phone } from "./phone.entity";

export interface User extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    password: string;  
    emailVerified?: boolean;
    phone?: Phone;
    phoneVerified?: boolean;
    profilePicture?: File;
    dateOfBirth?: Date;
    address?: Address;
}