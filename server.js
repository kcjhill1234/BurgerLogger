const express = require("express")
const mysql2 = require("mysql2");

var app = express();

var PORT = process.env.PORT || 8080;


const connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});
