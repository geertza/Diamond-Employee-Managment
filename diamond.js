const inquirer = require('inquirer');
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
  //  port
    port: 3306,
   // Your username
    user: "root",
   // Your password
    password: "password",
    database: "diamond_Db"
  });

  connection.connect(function(err) {
    if (err) throw err;
  });

  