import pkg from "pg";
const { Pool } = pkg;

const config = {
    user: process?.env?.DB_USER ?? "",
    host: process?.env?.DB_HOST ?? "",
    database: process?.env?.DB_NAME ?? "",
    password: process?.env?.DB_PASSWORD ?? "",
    port: Number.parseInt(process?.env?.DB_PORT ?? "", 10) || 5432,
};

const pool = new Pool(config);

export default pool;
