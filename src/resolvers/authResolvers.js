import { encrypt, compare } from "../utils/handlePassword";
import { tokenSign } from "../utils/handleJwt";


const resolvers = {
    Query: {
        
    },
    Mutation: {
        login: async (_, { username, password }) => {
            const user = users.find(user => user.username === username); // obtener el usuario (en este caso simulo la busqueda en un listado de usuario)
            if (user === null) throw new Error("INVALID_LOGIN");
            const checkPassword = await compare(password, user.password); // comparar la contraseña ingresada con la encriptada
            if (!checkPassword) throw new Error("INVALID_LOGIN");
            const token = tokenSign(user); // generar el token de sesion
            const credentials = { token, user }; // credenciales de login
            return credentials; // devolver el usuario y el token
        }
    }
};