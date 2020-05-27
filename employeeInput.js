class Employee {
    // Create a constructor for employee with agruments first_name,last_name, role_id , department_id 
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
    class role {
        // Create a constructor for role
        constructor(title,salary, role, department){
            // Add the properities title, id, title, email
            this.title = title;
            this.salary = salary;
            this.role = role;
            this.department = department
            this.Questions = [
                {
                    type: "input",
                    message: "New title?",
                    name: "title"
                },
                {
                    type: "input",
                    message: "Salary?",
                    name: "salary"
                },{
                    type: "input",
                    message: "department Id?",
                    name: "department"
                }
            ]
        }}
    


 

      module.exports = {Employee,role}