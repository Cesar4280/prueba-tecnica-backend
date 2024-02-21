// podria simplificar la definición de modelos de la siguiente manera

/*

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

function generateModel(tableName, columnsDefinition, options) {
    return sequelize.define(tableName, columnsDefinition, options);
}

const columnsDefinition = (stringAttribute, booleanAttribute) => {
    const modelAttributes = {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        [stringAttribute]: { type: DataTypes.STRING, allowNull: false },
        [booleanAttribute]: { type: DataTypes.BOOLEAN, allowNull: false }
    };
    return modelAttributes;
};

const options = { freezeTableName: true, timestamps: true, paranoid: true };

deviceModelAttributes = columnsDefinition("type", "visible");
projectModelAttributes = columnsDefinition("time_zone", "enabled");

export const deviceModel = generateModel("Device", deviceModelAttributes, options);
export const projectModel = generateModel("Project", projectModelAttributes, options);

deviceModel.belongsTo(projectModel, { foreignKey: "project_id", onDelete: "CASCADE" });

*/