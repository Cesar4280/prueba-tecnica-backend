import { ApolloServer } from "@apollo/server";

import { dbConnect, sequelize } from "./config/database.js";

// import typeDefs from "./schema/projectSchema.graphql";

import projectResolvers from "./resolvers/projectResolvers.js";
import deviceResolvers from "./resolvers/deviceResolvers.js";

dbConnect();

sequelize.sync().then(() => {
    console.log("Listos para empezar a desarrollar Graphql");
    // server.listen().then(({ url }) => {
    //     console.log(`Server running at ${url}`);
    // });
});

/*
const server = new ApolloServer({
    typeDefs,
    resolvers: [projectResolvers, deviceResolvers],
    context: ({ req }) => {
        // Lógica para obtener el usuario autenticado desde el token JWT
    },
});

sequelize.sync().then(() => {
    server.listen().then(({ url }) => {
        console.log(`Server running at ${url}`);
    });
});
*/