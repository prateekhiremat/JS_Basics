// Inheritance example
class person {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Abhi', 22);


function manager(first_arg, second_arg){
    let firstName = first_arg;
    let lastName = second_arg;

    this.toString = function(){
        return `Hi ${firstName} ${lastName}`
    }
}

class employee extends manager{
    constructor(firstName, lastName){
        super(firstName, lastName);
    }
    print(){
        console.log(this.toString());
    }
}

let employee1 = new employee('Prateek', 'Hiremath');
employee1.print();

/* polimorphism */
class Animal{
    eat(){
        console.log(`eat's edible substance`)
    }
}
class Cat extends Animal{
    /* not overriden any method */
}
class Cow extends Animal{
    //overriden
    eat(){
        console.log(`cow eat's grass`);
    }
}
let cat = new Cat();
cat.eat();
let cow = new Cow();
cow.eat();