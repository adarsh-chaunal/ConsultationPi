import { BaseEntity } from "../common/baseEntity";

export interface UserRoleMapper extends BaseEntity {
    userId: string;
    roleId: string;
}