"use strict";
const mysql = require("mysql2");
const mongoose = require("mongoose");
const util = require("util");
const { mysqldb, mongodb } = require("./database");

const databaseType = process.env.DEFAULT_DB;

let pool;
switch (databaseType) {
  case "MYSQL":
    pool = mysql.createPool(mysqldb).getConnection((err, connection) => {
      if (err) console.error(err);
      if (connection) return connection.release();
    });
    pool.query = util.promisify(pool.query);
    break;
  case "MONGO":
    mongoose.connect(mongodb.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    pool = mongoose;
    break;
}

module.exports = pool;
