const express = require("express")
const expressHandlebars = require("express-handlebars");
const burgerController = require("./controllers/burgerController")

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burgerController)

app.listen(PORT, function () {
    console.log("Server is listening on: http://localhost: " + PORT);
});

