function Calculator(first_args, second_args){
    let firstNumber = first_args;
    let secondNumber = second_args;
    let sum = ()=>firstNumber+secondNumber;
    let mul = ()=>firstNumber*secondNumber;
    let sub = ()=>firstNumber-secondNumber;
    let div = ()=>firstNumber/secondNumber;
    let pow = ()=>firstNumber**secondNumber;

    this.print = function(){
        return (`sum:${sum()}\nmul:${mul()}\nsub:${sub()}\ndiv:${div()}\npow:${pow()}`);
    }
}

let calci = new Calculator(6,8);

// encapsulation
class Person{
    // let personName;//error
    #personName;
    setName(personName){
        this.#personName = personName;
    }
    getName(){
        console.log(this.#personName);
    }
}
let person = new Person();
person.setName('A');
person.getName();

class Animal{
    #getCow(){
        return 'Cow';
    }
    details(){
        console.log(this.#getCow());
    }
}
let cow = new Animal();
cow.details();