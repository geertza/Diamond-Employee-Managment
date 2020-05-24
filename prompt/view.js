const inquirer = require('inquirer');
const mysql = require('mysql')
modIndex = require("../diamond.js")
let curViewChoice=""
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
            curViewChoice = "*" ;   
            console.log(modIndex)
            modIndex.display(`SELECT * FROM diamond_db.employee;`);
                break;
            case 'by department':
                curViewChoice = "department" ; 
               dapartmentSelect()
                break;
            case 'by Manager':
                curViewChoice = "manager"
                inquirer.prompt({
                    name:"man",
                    type: "number",
                    message:'manager #',
                }).then(function ({ man }) {
                    display(`SELECT * FROM diamond_db.employee
                    where manager_id = ${man};`);     
                });
                break;

  }})}

  

  
 module.exports = {viewEmp}