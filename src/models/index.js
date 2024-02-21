import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

function generateModel(tableName, columnsDefinition, options) {
    return sequelize.define(tableName, columnsDefinition, options);
}