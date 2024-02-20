import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Project = sequelize.define("Project", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    time_zone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Project;