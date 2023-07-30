import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repositories/user-repository";

export type Input = {
  name: string;
  email: string;
  password: string;
};

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) { }

  public async execute({ name, email, password }: Input): Promise<User> {
    const user = new User({ name, email, password });

    await this.userRepository.create(user);

    return user;
  }
}
