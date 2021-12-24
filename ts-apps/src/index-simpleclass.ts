//classes : es 6 feature but in ts who added advanced features

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