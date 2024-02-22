import bcrypt from "bcryptjs";

export const encrypt = async (password) => await bcrypt.hash(password, 10);
export const compare = async (password, hash) => await bcrypt.compare(password, hash);