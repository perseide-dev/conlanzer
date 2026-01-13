import { Role } from './role.entity';

export class User{
    constructor(
        public id: string,
        public sessionName: string,
        public userName: string,
        public email: string,
        public roleId: string,
        public password: string,
        public companyId: string,
        public createdAt: Date,
        public updatedAt: Date,
        public isActive: boolean = true,
    ) {}
}

