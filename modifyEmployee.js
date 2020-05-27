const inquirer = require('inquirer');
const mysql = require('mysql')
const main = require ('./test2')

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

let id =""
function modifyEmployeeTable(x){
inquirer.prompt(  {
    name: 'number',
    type: 'number',
    message: 'Employee #?',
}).then (answers => {
    id=answers.number
    connection.query(`SELECT * FROM employee
    where id=${id}`,(err, results) => {
        if (err) throw err;
        else { 
            console.table(results)
            inquirer.prompt({
                name:"Modifychioce",
                type: "list",
                message: "What would you like to change?",
                choices: function column(){return ((Object.keys(Object.assign({}, results[0]))).splice(1)).concat("Return to main menu");}
            })
            .then(function ({ Modifychioce }) {
                switch (Modifychioce) {
                    case 'first_name':
                        inquirer.prompt({name:'newInput',
                        type:"input",
                        message:"What is the new first name?",
                    }).then(function (newInput){
                     connection.query(`UPDATE employee SET  first_name = '${newInput.newInput}' WHERE id = '${id}';`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                                modifyEmployeeTable()})            })
                      break;
                      case 'last_name':
                         inquirer.prompt({name:'newInput',
                        type:"input",
                        message:"What is the new last name?",
                    }).then(function (newInput){
                     connection.query(`UPDATE employee SET  last_name = '${newInput.newInput}' WHERE id = '${id}';`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                                modifyEmployeeTable()})            })
                      break;
                    case 'role_id':
                         inquirer.prompt({name:'newInput',
                        type:"input",
                        message:"What is the new role?",
                    }).then(function (newInput){
                     connection.query(`UPDATE employee SET  role_id = '${newInput.newInput}' WHERE id = '${id}';`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                                modifyEmployeeTable()})            })
                      break;
                      case 'manager_id':
                       inquirer.prompt({name:'newInput',
                        type:"input",
                        message:"What is the new manager_id?",
                    }).then(function (newInput){
                     connection.query(`UPDATE employee SET  manager_id = '${newInput.newInput}' WHERE id = '${id}';`, function (err,data) {
                                if (err) throw err;
                                console.table(data);
                                modifyEmployeeTable()})            })
                      break;
                    default:
                        
                   console.log(main);
                  }
            })
    
           
         }})
})
}
function startover(){
Start()
}
module.exports = {modifyEmployeeTable}