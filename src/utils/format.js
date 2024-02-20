export function getConnectionURI({ dialect, username, password, host, port, dbname }) {
    return `${dialect}://${username}:${password}@${host}:${port}/${dbname}?sslmode=require`;
}