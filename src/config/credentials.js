export const dbOptions = {
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    host: process.env.DB_HOST ?? "localhost",
    dbname: process.env.DB_NAME ?? "test",
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASS ?? "root",
    dialect: process.env.DB_ENGINE ?? "postgres" //, dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
};