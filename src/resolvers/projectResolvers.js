import Project from "../models/projectModel.js";

const resolvers = {
    Query: {
        // enabledProjectsCount: async () => {
        //     // Lógica para obtener la cantidad de proyectos activos
        // },
        getEnabledProjects: async () => {
            // Lógica para obtener proyectos habilitados
            try {
                const findOptions = { where: { enabled: true } };
                const enabledProjects = await Project.findAll(findOptions);
                console.log(enabledProjects);
                return enabledProjects;
            } catch (error) {
                console.error("Error in getEnabledProjects process:" + error);
            } finally {
                console.log("Completion getEnabledProjects process")
            }
        },
        getProjectById: async (_, { id }) => {
            // Lógica para obtener un proyecto específico
            try {
                const findOptions = { where: { id: Number.parseInt(id), enabled: true } };
                const enabledProject = await Project.findOne(findOptions);
                console.log(enabledProject);
                return enabledProject;
            } catch (error) {
                console.error("Error in getProjectById process:" + error);
            } finally {
                console.log("Completion getProjectById process")
            }
        }
    },
    Mutation: {
        createProject: async (_, { input }) => {
            // Lógica para crear un proyecto
            try {
                console.log(input);
                const project = new Project({
                    name: input.name,
                    enabled: true,
                    time_zone: input.time_zone
                });
                console.log(project);
                project.save();
                return project;
            } catch (error) {
                console.error("Error in createProject process:" + error);
            } finally {
                console.log("Completion createProject process")
            }
        },
        updateProject: async (_, { id, input }) => {
            // Lógica para actualizar un proyecto
            try {
                const project = new Project({ name: input.name, type: input.type });
                console.log(project);
                return project;
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