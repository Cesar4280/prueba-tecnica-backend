import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { dbConnect, sequelize } from "./config/database.js";

import { typeDefs as projectTypeDefs } from "./schema/projectSchema.js";
import { typeDefs as deviceTypeDefs } from "./schema/deviceSchema.js";

import projectResolvers from "./resolvers/projectResolvers.js";
import deviceResolvers from "./resolvers/deviceResolvers.js";

dbConnect();

const server = new ApolloServer({
    typeDefs: [projectTypeDefs, deviceTypeDefs],
    resolvers: [projectResolvers, deviceResolvers],
    context: ({ req }) => {
        // Lógica para obtener el usuario autenticado desde el token JWT
    }
});

sequelize.sync().then(() => {
    console.log("Listos para empezar a desarrollar Graphql");
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at: ${url}`);