import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/credentials.js";

/**
 * Debes de pasar el objeto de usuario
 * @param {object} user 
 * @returns {string} token
 */
export const tokenSign = (user) => {
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
    return token;
};

/**
 * Debes de pasar el token de sesion el jwt
 * @param {string} token 
 * @returns {jwt.JwtPayload | null} payload
 */
export const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, JWT_SECRET_KEY);
        return payload;
    } catch (error) {
        console.error(error);
        return null;
    }
};