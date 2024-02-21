import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs as projectTypeDefs } from "../schema/projectSchema.js";
import { typeDefs as deviceTypeDefs } from "../schema/deviceSchema.js";

import projectResolvers from "../resolvers/projectResolvers.js";
import deviceResolvers from "../resolvers/deviceResolvers.js";

import { svrOptions } from "./credentials.js";

const server = new ApolloServer({
    typeDefs: [projectTypeDefs, deviceTypeDefs],
    resolvers: [projectResolvers, deviceResolvers],
    context: ({ req }) => {
        // Lógica para obtener el usuario autenticado desde el token JWT
    }
});

const startAppServer = (server) => {
    startStandaloneServer(server, svrOptions)
        .then(({ url }) => console.log(`🚀 Server ready at: ${url}`))
        .catch(error => console.error("Unable to start Apolo Server:", error))
        .finally(() => console.log("Completion startStandaloneServer process"));
};

export { server, startAppServer };