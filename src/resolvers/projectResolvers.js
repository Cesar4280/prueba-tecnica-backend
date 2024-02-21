import Project from "../models/projectModel.js";

const resolvers = {
    Query: {
        // enabledProjectsCount: async () => {
        //     // Lógica para obtener la cantidad de proyectos activos
        // },
        getEnabledProjects: async () => {
            // Lógica para obtener proyectos habilitados
        },
        getProjectById: async (_, { id }) => {
            // Lógica para obtener un proyecto específico
        }
    },
    Mutation: {
        createProject: async (_, { input }) => {
            // Lógica para crear un proyecto
        },
        updateProject: async (_, { id, input }) => {
            // Lógica para actualizar un proyecto
        },
        deleteProject: async (_, { id }) => {
            // Lógica para eliminar (soft-delete) un proyecto
        }
    }
};

export default resolvers;