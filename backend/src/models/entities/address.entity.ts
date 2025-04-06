import { BaseEntity } from "../common/baseEntity";

export interface Address extends BaseEntity {
    streetAddress1?: string;
    streetAddress2?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    latitude?: number;
    longitude?: number;
}