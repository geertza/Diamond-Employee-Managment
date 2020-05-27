class Employee {
    // Create a constructor for employee with agruments first_name,last_name, role_id , manager_id 
    constructor(first,last, role, manager){
        // Add the properities name, id, title, email
        this.first = first;
        this.last = last;
        this.role = role;
        this.manager = manager
        this.Questions = [
            {
                type: "input",
                message: " First name?",
                name: "first"
            },
            {
                type: "input",
                message: "Last name?",
                name: "last"
            },
            {
                type: "input",
                message: "Role Id?",
                name: "role"
            },{
                type: "input",
                message: "manager Id?",
                name: "manager"
            }
        ]
    }}



 

      module.exports = {Employee}