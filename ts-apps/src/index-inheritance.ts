//base class : concrete class,interface,abstract class.

//concrete class inheritance
//base class
class Account {
    constructor() {
        console.log('account class')
    }
    protected deposit() {
        return 10;
    }
}
//dervied class
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('savings account class')
    }
    //overriding
   public deposit() {
        return 100;
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())

interface Flyable {
    fly(): string;
}

interface Eatable {
    eat():string;
}
class Bird implements Flyable ,Eatable {
    public fly(): string {
        return 'Bird is flying'
    }
    public eat():string {
        return 'eat'
    }
}
class AirPlane implements Flyable {
    public fly(): string {
        return 'AirPlane is flying'
    }
}
let flyRef:Flyable;
flyRef = new Bird();
console.log(flyRef.fly());

flyRef = new AirPlane();
console.log(flyRef.fly());


abstract class Animal {
    abstract eat();
    saveAnimal() {
        return 'Save Animals from hunters'
    }
}

class Tiger extends Animal {
    public eat() {
        console.log('eat')
    }

}
let animal = new Tiger() as Animal;
console.log(animal.saveAnimal());
animal.eat()