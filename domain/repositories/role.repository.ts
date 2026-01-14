import { Role } from "../entities/role.entity";

export interface RoleRepository {
    create(role: Role): Promise<Role>;
    update(id: string, role: Partial<Role>): Promise<Role | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Role | null>;
    findAll(): Promise<Role[]>;
    findByName(name: string): Promise<Role | null>;
}