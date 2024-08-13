// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-1.cdyimy8yk1ei.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Angana89",
  port: "3306",
  database: "users",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
