import { Sequelize } from "sequelize";

import { dbOptions } from "./credentials.js";
import { getConnectionURI } from "../utils/format.js";

// Conexión con la base de datos

// podemos conectarnos pasando una URI de conexión
const CONNECTION_URI = getConnectionURI(dbOptions);
const sequelize = new Sequelize(CONNECTION_URI);

// metodo para probar la conexión intentando autenticarse
const testConnection = (sequelize) => {
    sequelize.authenticate()
        .then(() => console.log("Connected to Postgres database"))
        .catch(error => console.error("Unable to connect to the database:", error))
        .finally(() => console.log("Completion testConnection process"));
};

// metodo para sincronizar los modelos (tablas) con la base de datos
const synchronizeDatabase = (sequelize, force = false) => {
    sequelize.sync({ force })
        .then(() => console.log("Database synchronized with the defined models"))
        .catch(error => console.error("Error while trying to synchronize the database:", error))
        .finally(() => console.log("Completion synchronizeDatabase process"));
};

export { sequelize, testConnection, synchronizeDatabase };