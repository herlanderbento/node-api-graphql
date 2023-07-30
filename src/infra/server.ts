import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";

import "./shared/container";

import path from "node:path";

import { UsersResolver } from "./graphql/users/resolvers/users.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(3000);

  console.log(`HTTP server running on ${url}`);
}

bootstrap();