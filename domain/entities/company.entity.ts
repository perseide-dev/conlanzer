export class Company{
    constructor(
        public id: string,
        public userOwnerId: string,
        public name: string,
        public address: string,
        public phone: string,
        public email: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}