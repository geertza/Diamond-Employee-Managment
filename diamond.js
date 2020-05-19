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
    Start()
  });
  const logo = require('asciiart-logo');

console.log(
    logo({
        name: '<> Diamond <>',
        borderColor: 'red',
        logoColor: 'bold-blue',
        textColor: 'blue',
    })
    .render()
);


  function Start(){
    inquirer
    .prompt(
        {
            name: 'main',
            type: 'list',
            message: 'Employee management function?',
            choices: ['View Employees', 'view', 'update', 'delete', 'exit'],
        }
    ).then(function ({ main }) {
        switch (main) {
            case 'View Employees':
                viewEmp();
                break;
            case 'view':
                viewList();
                break;
            case 'update':
                update();
                break;
            case 'delete':
                deleteList();
                break;
            case 'exit':
                connection.end()
                return;
        }
    })
}
  
  function viewEmp(){
    inquirer
    .prompt(
        {
            name: 'viewChoice',
            type: 'list',
            message: 'choose',
            choices: ['all', 'by department', 'by Manager'],
        }
    ).then(function ({ viewChoice }) {
        switch (viewChoice) {
            case 'all':
            console.log("all choosen") ;   
            seeAll();
                break;
            case 'by department':
                viewList();
                break;
            case 'by Manager':
                update();
                break;

  }})}

  function seeAll() {connection.query(`SELECT * FROM diamond_db.employee;`, function (err,data) {
    
    if (err) throw err;
    console.table(data)
            getJob();
        
            });
         };