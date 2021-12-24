//Arrays Generics:
//
// let list = [1,2,3,4 ,"tst",true];
// let list:number[] = [1,2,3,4,true];
//generic syntax.
//ts supports lot of generic types : Array<?> ,Promise<?>,Observable<?>
let list: Array<number> = [1, 2, 3, 4];

class Employee {
    id: number;
    name: string;
}
let empList: Array<Employee> = [{ id: 1, name: 'a' }, { id: 1, name: 'b' }];