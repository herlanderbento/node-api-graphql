import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repositories/user-repository";
import { prismaClient } from '../config/prisma-client';
import { UserPrismaMapper } from "./mappers/user-prisma-mapper";

export class UserPrismaRepository implements UserRepository {

  public async create(user: User): Promise<void> {
    await prismaClient.users.create({
      data: UserPrismaMapper.toModel(user)
    })
  }

  public async findById(id: string): Promise<User | null> {
    const users = await prismaClient.users.findFirst({ where: { id: id } })

    if (!users) {
      return null
    }

    return UserPrismaMapper.toEntity(users)
  }
  async findByEmail(email: string): Promise<User | null> {
    const users = await prismaClient.users.findFirst({ where: { id: email } })

    if (!users) {
      return null
    }

    return UserPrismaMapper.toEntity(users)
  }
}