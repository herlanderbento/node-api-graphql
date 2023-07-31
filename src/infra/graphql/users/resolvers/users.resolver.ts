import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { container } from "tsyringe"
import { UserModel } from "../model/user-model";
import { CreateUserInput } from "../inputs/create-user-input";
import { CreateUserUseCase } from "../../../../application/use-cases/users/create-user.use-case";

@Resolver(()=>UserModel)
export class UsersResolver {
  @Query(() => String)
  async index() {
    return "Ola mundo"
  }

  @Mutation(() => UserModel)
  async createUser(@Arg("data") data: CreateUserInput) {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    return await createUserUseCase.execute(data);
  }
}