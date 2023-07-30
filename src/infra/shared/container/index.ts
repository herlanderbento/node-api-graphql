import { container } from "tsyringe";
import { UserPrismaRepository } from "../../db/prisma/user-prisma.repository";
import { UserRepository } from "../../../domain/repositories/user-repository";

container.registerSingleton<UserRepository>(
  "UserRepository",
  UserPrismaRepository,
);