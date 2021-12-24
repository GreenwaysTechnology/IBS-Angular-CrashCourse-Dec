
//variables are initalized
class Employee {
    //instance variables and methods ,constructors
    id: number;
    name: string;
    status: boolean;
    //constructors
    constructor(id: number = 0, name: string = '', status: boolean = true) {
        this.id = id;
        this.name = name;
        this.status = status
    }
    //methods
    calculateSalary(salary: number = 0): number {
        return salary * 100;
    }

}
//create object
//emp is reference variable
let emp = new Employee();
console.log(emp.id, emp.name, emp.status, emp.calculateSalary(1000))

emp = new Employee(10,'subramanian',true);
console.log(emp.id, emp.name, emp.status, emp.calculateSalary(1000))
