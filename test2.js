
  
const inquirer = require('inquirer');
const mysql = require('mysql')
const modemp= require('./modifyEmployee')
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
                return x="boi";
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
        }})}
        

       
         function viewEmp(){
            inquirer
            .prompt(
                {
                    name: 'viewChoice',
                    type: 'list',
                    message: 'choose',
                    choices: ['all', 'by department', 'by Manager'],
                }
            ).then( function ({ viewChoice }) {
                switch (viewChoice) {
                    case 'all':   
                    {connection.query(`SELECT * FROM diamond_db.employee;`, function (err,data) {
                        if (err) throw err;
                        console.table(data);
                        Mod()
                            });};
                    
                     
                        break;
                    case 'by department':
                        
                        inquirer.prompt({
                            name:"dept",
                            type: "number",
                            message:'Department #',
                        }).then(function ({ dept }) {
                            connection.query(`SELECT employee.id,employee.first_name,employee.last_name, department.department,department.department_id 
                            FROM employee join role ON employee.role_id = role.role_id
                            join department ON role.department_id = department.department_id
                            where department.department_id = ${dept};`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                            Mod()
                        })});
                        break;
                        case 'by Manager':
                        inquirer.prompt({
                            name:"man",
                            type: "number",
                            message:'manager #',
                        }).then(function ({ man }) {
                            connection.query(`SELECT * FROM diamond_db.employee
                            where manager_id = ${man};`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                                Mod();    
                        });})
            }})}
        

          
function Mod(){inquirer
    .prompt(
        {
            name: 'employeeModify',
            type: 'list',
            message: 'Would you like to modify or Delete an Employee?',
            choices: ['Modify','Delete','No, return to main menu'],
        }
    ).then(function ({employeeModify}) {
        switch(employeeModify) {
            case 'Modify':
               ()=> {modemp.modifyEmployeeTable().then (Start())};
              break;
            case 'Delete':  inquirer.prompt({
                name:"empNumber",
                type: "number",
                message:'Employee #',
            }).then(function ({ empNumber }) {
                display(`delete from employee
                where id =${empNumber};`);
                console.log(`employee Id=${empNumber} deleted`);
                Start()}); 
              break;
            default:
              Start();
            }})}

  

  async function display(x) {connection.query(x, function (err,data) {
    if (err) throw err;
    console.table(data);
        });};


      module.exports = {Start,connection}
