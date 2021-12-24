
//variables are initalized
class Employee {
    //instance variables and methods ,constructors
    id: number = 0;
    name: string = "";
    status: boolean = true;

    //methods
    calculateSalary(salary: number = 0): number {
        return salary * 100;
    }

}
//create object
//emp is reference variable
let emp = new Employee();
console.log(emp.id,emp.name,emp.status,emp.calculateSalary(1000))
emp.id =900;
emp.name='subu';
emp.status=true
console.log(emp.id,emp.name,emp.status,emp.calculateSalary(1000))