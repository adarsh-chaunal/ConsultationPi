import { BaseEntity } from "../common/baseEntity";

export interface Phone extends BaseEntity {
    phoneNumber: string;
    countryCode: string;
}