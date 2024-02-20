import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Device = sequelize.define("Device", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

export default Device;