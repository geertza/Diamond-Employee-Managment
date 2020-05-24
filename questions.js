const inquirer = require('inquirer');

test()
async function test(){
 console.log("yeah"+Start(x))
    }

function lame(){
    return "yes"
}
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
    ).then(function ({ viewChoice }) {
        switch (viewChoice) {
            case 'all':
            console.log("all choosen") ;   
            return(`SELECT * FROM diamond_db.employee;`);
                break;
            case 'by department':
                viewList();
                break;
            case 'by Manager':
                update();
                break;

  }})}

  function output(x){
      console.log(x)
  }

  function seeAll() {connection.query(`SELECT * FROM diamond_db.employee;`, function (err,data) {
    if (err) throw err;
    console.table(data);
    Start();
         });};