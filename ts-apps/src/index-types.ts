
//object types can be defined in many ways
/**
 * 1.class as type
 * 2.interface as type
 * 3.type keyword 
 */

//class As Type
class User {
    id: number;
    name: string;
    city?:string;
}
//interface as Type
interface Person {
    id: number;
    name: string;
}
//typekeyword
type Customer = {
    id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: 'Subramanian',
    // city:'Coimbatore'
}
let person: Person = {
    id: 1,
    name: 'Subramanian'
}
let cust: Customer = {
    id: 1,
    name: 'Subramanian'
}