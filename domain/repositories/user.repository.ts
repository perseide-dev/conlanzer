import {User} from '../entities/user.entity';

export interface UserRepository {
    create(user: User): Promise<User>;
    update(id: string, user: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<User | null>;
    findBySessionName(sessionName: string): Promise<User | null>;
    findByUserName(userName: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}