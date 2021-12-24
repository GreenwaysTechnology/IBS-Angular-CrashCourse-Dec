//decorators - Annotations

//declaration of decorator

// function Course(target:any) {
//     //declorator logic
//     Object.defineProperty(target.prototype, "subject", {
//         value: 'Typescript'
//     })
// }
function Course(subject: any) {
    return function (target: any) {
        //declorator logic
        Object.defineProperty(target.prototype, "course", {
            value: subject
        })
    }
}

//how to use decorator : you can attach decorator on class,method, field
@Course({ subject: 'angular' })
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
let student = new Student('Subramanian', 'Murugan') as any;
console.log(`${student.firstName} ${student.lastName} ${student.course.subject}  `);

