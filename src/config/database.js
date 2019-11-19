// Database Configuration
module.exports = {
  mysqldb: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10
  },
  mongodb: {
    host: process.env.MG_HOST
  }
};
