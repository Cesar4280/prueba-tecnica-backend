import Device from "../models/deviceModel.js";

const resolvers = {
    Query: {
        devices: async (_, { projectId }) => {
            // Lógica para obtener dispositivos habilitados de un proyecto
        },
        device: async (_, { id }) => {
            // Lógica para obtener un dispositivo específico
        },
    },
    Mutation: {
        createDevice: async (_, { projectId, input }) => {
            // Lógica para crear un dispositivo en un proyecto
        },
        updateDevice: async (_, { id, input }) => {
            // Lógica para actualizar un dispositivo
        },
        deleteDevice: async (_, { id }) => {
            // Lógica para eliminar (soft-delete) un dispositivo
        },
    },
};

export default resolvers;