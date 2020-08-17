const express = require("express")
const mysql2 = require("mysql2");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

const connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

app.listen(PORT, function () {
    console.log("Server is listening on: http://localhost: " + PORT);
});

