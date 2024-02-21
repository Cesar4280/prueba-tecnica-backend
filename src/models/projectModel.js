import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Project = sequelize.define("Project", // nombre de la tabla
    { // definición de campos de la tabla 'Project'
        id: { // estableciendo la llave primaria
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
    },
    {
        freezeTableName: true, // evita que el ORM defina en plural el nombre de la tabla en SQL
        timestamps: true, // agrega los campos de fecha de creación y modificación
        paranoid: true // estrategia del soft-delete (campo deleteAt) para preserver los datos
    }
);

export default Project;