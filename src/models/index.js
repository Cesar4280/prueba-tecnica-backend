/* tambien podria simplifarse la creación de modelos de esta manera

import { columnsDefinition, generateModel, modelOptions, association, primaryKey } from "../utils/model";

const projectModelAttributes = columnsDefinition("time_zone", "enabled");
const deviceModelAttributes = columnsDefinition("type", "visible");

const Project = generateModel("Project", projectModelAttributes, modelOptions);
const Device = generateModel("Device", deviceModelAttributes, modelOptions);

Project.hasMany(Device, { ...association, sourceKey: primaryKey });
Device.belongsTo(Project, { ...association, targetKey: primaryKey, onDelete: "CASCADE" });

export { Project, Device };
*/