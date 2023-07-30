import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repositories/user-repository";

export class UserInMemoryRepository implements UserRepository {
  items: User[] = [];

  public async create(user: User): Promise<void> {
    this.items.push(user);
  }
  
  public async findById(id: string): Promise<User> {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new Error(`Entity Not Found using ID ${id}`);
    }
    return item;
  }

  public async findByEmail(email: string): Promise<User> {
    const item = this.items.find((item) => item.email === email);
    if (!item) {
      throw new Error(`Entity Not Found using Email ${email}`);
    }
    return item;
  }
}