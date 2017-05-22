// Eat a Burger Making Connection to the database
var mysql = require("mysql");
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'ravi1962',
        database: 'burgers_db'

    })


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports=connection;