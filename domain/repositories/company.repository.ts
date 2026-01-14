import { Company } from "../entities/company.entity";

export interface CompanyRepository {
    create(company: Company): Promise<Company>;
    update(id: string, company: Partial<Company>): Promise<Company | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Company | null>;
    findAll(): Promise<Company[]>;
    findByEmail(email: string): Promise<Company | null>;
    findByName(name: string): Promise<Company | null>;
    findByAddress(address: string): Promise<Company | null>;
    findByPhone(phone: string): Promise<Company | null>;
}