import { BaseEntity } from "../common/baseEntity";

export interface RolePermissionMapper extends BaseEntity {
    roleId: string;
    permissionId: string;
}