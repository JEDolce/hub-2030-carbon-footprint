const dotenv = require('dotenv').config();

const dbConfig = {
    USER: process.env.PGUSER || "jedolce",
    PASSWORD: process.env.PGUPASSWORD || "jedolce",
    HOST: process.env.PGHOST || 'localhost',
    PORT: process.env.PGPORT || 5432,
    DB: process.env.PGDATABASE || 'hublogindb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = {
    dbConfig
}

/*
    max: maximum number of connection in pool
    min: minimum number of connection in pool
    idle: maximum time, in milliseconds, that a connection can be idle before being released
    acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
*/