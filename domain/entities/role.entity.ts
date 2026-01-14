import Permissions from "./permissions.entity";
import { permissionKey } from "../value-objects/permissionKey.valueObject";
import { UserType } from "../enums/userType.enum";

export class Role{
    constructor(
        public id: string,
        public name:  string,
        public userType: UserType,
        public permissions: Permissions[],
        public isDefault: boolean = false,
        public companyId: String,
        public createdAt: Date,
        public updatedAt: Date, 
    ) {}

    hasPermission(permission: string): boolean {
        return this.permissions.some(p => p.key === permissionKey);
    }

}