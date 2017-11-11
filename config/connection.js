var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers"
});


connection.connect(function(err) {
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
