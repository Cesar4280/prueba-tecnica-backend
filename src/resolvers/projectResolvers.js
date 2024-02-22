import Project from "../models/projectModel.js";

const resolvers = {
    Query: {
        getEnabledProjects: async () => {
            // Lógica para obtener proyectos habilitados
            try {
                const enabledOnlyFilter = { where: { enabled: true } };
                const projectList = await Project.findAll(enabledOnlyFilter);
                return projectList;
            } catch (error) {
                console.error("Error in getEnabledProjects process:", error);
            } finally {
                console.log("Completion getEnabledProjects process");
            }
        },
        getProjectById: async (_, { id }) => {
            // Lógica para obtener un proyecto específico (que este habilitado) 
            try {
                const idProject = Number.parseInt(id);
                const searchFilters = { where: { id: idProject, enabled: true } };
                const projectFound = await Project.findOne(searchFilters);
                return projectFound;
            } catch (error) {
                console.error("Error in getProjectById process:", error);
            } finally {
                console.log("Completion getProjectById process");
            }
        }
    },
    Mutation: {
        createProject: async (_, { input }) => {
            // Lógica para crear un proyecto
            try {
                const { name, time_zone } = input; // datos esperados del cliente
                const projectToAdd = { name, time_zone, enabled: true }; // armo el objeto a guardar en la BD
                const newProject = await Project.create(projectToAdd); // procedo a crearlo en el modelo
                newProject.save(); // guardo el nuevo registro en la BD
                return newProject; // devuelvo el resultado de la operación
            } catch (error) {
                console.error("Error in createProject process:", error);
            } finally {
                console.log("Completion createProject process");
            }
        },
        updateProject: async (_, { id, input }) => {
            // Lógica para actualizar un proyecto
            try {
                const findOptions = { where: { id: Number.parseInt(id), enabled: true } };
                const [affectedCount] = await Project.update({
                    name: input.name,
                    time_zone: input.time_zone
                }, findOptions
                );
                console.log(affectedCount);
                return {
                    name: input.name,
                    time_zone: input.time_zone
                };
            } catch (error) {
                console.error("Error in getProjectById process:" + error);
            } finally {
                console.log("Completion getProjectById process")
            }
        },
        deleteProject: async (_, { id }) => {
            // Lógica para eliminar (soft-delete) un proyecto
            try {
                const project = new Project({ name: input.name, type: input.type });
                console.log(project);
                return project;
            } catch (error) {
                console.error("Error in getProjectById process:" + error);
            } finally {
                console.log("Completion getProjectById process")
            }
        }
    }
};

export default resolvers;