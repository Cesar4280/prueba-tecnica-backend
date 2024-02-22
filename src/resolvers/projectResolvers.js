import Project from "../models/projectModel.js";

const resolvers = {
    Query: {
        getProjects: async () => {
            // Lógica para obtener proyectos habilitados
            try {
                const enabledOnlyFilter = { where: { enabled: true } }; // condición para solicitar los proyectos que estén activados
                const projectList = await Project.findAll(enabledOnlyFilter); // aplico el filtro en la busqueda
                return projectList; // devuelvo el listado de proyectos
            } catch (error) {
                console.error("Error in getProjects process:", error);
            } finally {
                console.log("Completion getProjects process");
            }
        },
        getProjectById: async (_, { id }) => {
            // Lógica para obtener un proyecto específico (que este habilitado) 
            try {
                const idProject = Number.parseInt(id); // solicito el ID para indentificar el proyecto en especifico
                const searchFilters = { where: { id: idProject, enabled: true } }; // sumado a que este habilitado
                const projectFound = await Project.findOne(searchFilters); // aplico el filtro en la busqueda
                return projectFound; // devuelve el proyecto encontrado o null si no lo encuentra
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
                const { name, time_zone } = input; // datos esperados del cliente para crear un nuevo proyecto
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
                const idProject = Number.parseInt(id); // se espera que el cliente envie el ID y lo convierto a INT
                const { name, time_zone } = input; // adicionalmente los campos candidatos a actualizar
                const editionData = { name, time_zone }; // preparo un objeto con esos datos
                for (const field in editionData) editionData[field] ?? delete editionData[field]; // descarto los campos que no vinieron
                const searchFilters = { where: { id: idProject, enabled: true } }; // filtro de búsqueda del registro a editar
                const [updatedRowsCount] = await Project.update(editionData, searchFilters); // compruebo que se ha editado algo y cuántas filas afectó
                if (updatedRowsCount === 0) throw new Error("ERR_NOT_FOUND"); // si no se editó es porque no existe ese proyecto
                return "Project successfully updated"; // si todo anduvo bien, regreso un mensaje de confirmación
            } catch (error) {
                console.error("Error in updateProject process:", error);
            } finally {
                console.log("Completion updateProject process")
            }
        },
        deleteProject: async (_, { id }) => {
            // Lógica para eliminar (soft-delete)
            try {
                const idProject = Number.parseInt(id); // inicio la busqueda preguntando por la llave primaria
                const searchFilters = { where: { id: idProject, enabled: true } }; // sumado a que este habilitado
                const projectFound = await Project.findOne(searchFilters); // aplico el filtro en la busqueda
                if (projectFound === null) throw new Error("ERR_NOT_FOUND"); // si no se encontró es porque no existe ante los ojos del usuario
                projectFound.enabled = false; // actualizo el estado a deshabilitado
                await projectFound.save(); // confirmo la actualización en la BD
                await projectFound.destroy(); // aplico el softDelete al proyecto en cuestión (DeleteAt)
                return "Project successfully removed";
            } catch (error) {
                console.error("Error in deleteProject process:", error);
            } finally {
                console.log("Completion deleteProject process")
            }
        }
    }
};

export default resolvers;