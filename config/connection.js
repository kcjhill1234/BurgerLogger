const  mysql = require("mysql");

let connection = null 
if (process.env.NODE_ENV === "production") {
    connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
