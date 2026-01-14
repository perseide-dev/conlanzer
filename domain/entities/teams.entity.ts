import { User } from "./user.entity";

export class Teams{
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public members: User[],
        public companyId: string,
        public createdBy: string,
        public createdAt: Date,
        public updatedAt: Date,
    ){}
}