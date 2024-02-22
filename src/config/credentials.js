export const dbOptions = {
    port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 5432,
    host: process.env.DB_HOST ?? "localhost",
    dbname: process.env.DB_NAME ?? "test",
    username: process.env.DB_USER ?? "root",
    password: process.env.DB_PASS ?? "root",
    dialect: process.env.DB_ENGINE ?? "postgres" //, dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
};

export const svrOptions = {
    listen: {
        host: process.env.SVR_HOST ? process.env.SVR_HOST : "localhost",
        port: process.env.SVR_PORT ? Number.parseInt(process.env.SVR_PORT) : 4000
    }
};

export const JWT_SECRET_KEY = process.env.JWT_SECRET ?? "secret";