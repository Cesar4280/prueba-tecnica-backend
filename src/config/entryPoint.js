import { sequelize, testConnection, synchronizeDatabase } from "./database.js";
import { server, startAppServer } from "./server.js";

export const runApplication = () => {
    testConnection(sequelize);
    synchronizeDatabase(sequelize);
    startAppServer(server);
};