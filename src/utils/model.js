/* utilidades para simplificar la creación de modelos -> ../scr/models/index.js

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export function generateModel(tableName, columnsDefinition, options) {
    return sequelize.define(tableName, columnsDefinition, options);
}

export function columnsDefinition(stringAttribute, booleanAttribute) {
    const modelAttributes = {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        [stringAttribute]: { type: DataTypes.STRING },
        [booleanAttribute]: { type: DataTypes.BOOLEAN }
    };
    for (const attribute of modelAttributes) attribute.allowNull = false;
    return modelAttributes;
};

export const association = { foreignKey: "project_id" }, primaryKey = "id";
export const modelOptions = { freezeTableName: true, timestamps: true, paranoid: true };

*/