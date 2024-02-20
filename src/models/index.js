import { DataTypes, Sequelize } from "sequelize";

function generateModel(tableName, model) {
    return Sequelize.define(tableName, {
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
}