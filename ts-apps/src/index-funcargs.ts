//functions

function sayHello() {
    console.log('hello')
}
sayHello();

//default args
function add(a: number = 0, b: number = 0): number {
    return a + b;
}
let addResult = add(10, 10);
console.log(addResult)

// addResult = add("10", 10);
// console.log(addResult)
addResult = add();
console.log(addResult)

//optional parameter
function doSomething(myvar1?: string, myvar2?: string) {
    console.log(myvar1, myvar2)
}
doSomething()

//arrow function.

// function multiply(a: number = 0, b: number = 0) {
//     return a * b;
// }

// let multiply = (a: number = 0, b: number = 0):number => {
//     return a * b;
// }
let multiply = (a: number = 0, b: number = 0): number => a * b;

console.log(multiply(90, 10))

//void
let doStuff = (): void => {
    console.log('test')
}
let doStuff1 = (): any => {
    console.log('test')
}








