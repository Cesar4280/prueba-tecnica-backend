import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Device = sequelize.define("Device", // nombre de la tabla
    { // definición de campos de la tabla 'Device'
        id: { // estableciendo la llave primaria
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
    },
    {
        freezeTableName: true, // evita que el ORM defina en plural el nombre de la tabla en SQL
        timestamps: true, // agrega los campos de fecha de creación y modificación
        paranoid: true // estrategia del soft-delete (campo deleteAt) para preserver los datos
    }
);

export default Device;