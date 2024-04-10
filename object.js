/* The object can be created in two ways in JavaScript:
1. Object Literal
2. Object Constructor */

// object literal
let person = {
    firstName : 'Prateek',
    lastName : 'Hiremath',

    printName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let student = {
    printName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
student.firstName = 'Prateek';
student.lastName = 'Hiremath';
student.printName();

/* Here student object is getting effected to avoid this we use `Object.create() */

let me = Object.create(student);
me.firstName = 'Prateek';
me.lastName = 'Hiremath';
me.printName();

student.printName(); //here student object is uneffected

//! object constructor
//constructor function
function employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let employee1 = new employee('Akhul', 'Balaji');