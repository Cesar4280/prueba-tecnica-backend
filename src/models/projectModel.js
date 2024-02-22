import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

import Device from "./deviceModel.js";

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

// Estableciendo la relación de uno a muchos
Project.hasMany(Device, { // un proyecto puede tener muchos dispositivos
    foreignKey: "project_id", // donde el campo foraneo a definir en el modelo 'Device' será 'project_id'
    sourceKey: "id" // y hace referencia a la llave primaria osea el campo id en en modelo 'Project'
});
Device.belongsTo(Project, // por lo tanto, un dispositivo pertenece a un proyecto
    {
        foreignKey: "project_id", // confirmamos que el campo foraneo será 'project_id'
        targetKey: "id", // y hace referencia a la llave primaria en el modelo 'Project'
        onDelete: "CASCADE" // especifica que, si un proyecto se elimina, todos los dispositivos asociados también se eliminarán.
    }
);

export default Project;