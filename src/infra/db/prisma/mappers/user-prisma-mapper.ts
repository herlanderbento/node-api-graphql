import { Users } from "@prisma/client"
import { User } from "../../../../domain/entity/user"

export class UserPrismaMapper {
  public static toModel(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
  }

  public static toEntity(entity: Users) {
    return new User({
      name: entity.name,
      email: entity.email,
      password: entity.password
    }, entity.id);
  }
}