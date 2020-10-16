const express = require("express");
const Connection = require("mysql2");
const Sequelize = require("sequelize");

const connection = new Sequelize("studentsdb", "root", "mysql", {
    host: "localhost",
    dialect: "mysql"
});

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


const Students = connection.define("users", {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    spec: Sequelize.STRING
});

connection.sync({
    logging: console.log
});


const app = express();
const port = 3000;


app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("\tserver running at port 3000");
});