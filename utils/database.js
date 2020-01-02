const mysql = require("mysql2");

//creates a pool of connections so that we can query multiple collections
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "Users",
  password: ""
});

module.exports = pool.promise();
