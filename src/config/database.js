import { Sequelize } from "sequelize";

import { dbOptions } from "./credentials.js";
import { getConnectionURI } from "../utils/format.js";

// Option 1: Passing a connection URI
const CONNECTION_URI = getConnectionURI(dbOptions);
const sequelize = new Sequelize(CONNECTION_URI);

// Option 2: Passing parameters separately (other dialects): const sequelize = new Sequelize(dbOptions);

const dbConnect = () => {
    sequelize.authenticate()
        .then(() => console.log("Connected to Postgres database"))
        .catch(error => console.error("Unable to connect to the database:", error));
};

export { sequelize, dbConnect };