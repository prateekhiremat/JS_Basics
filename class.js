/* There are two ways
First way(Treditional)
Encapsulation */
class Vehicle {
    setDetails(name){
        this.name = name;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
let car = new Vehicle();
car.setDetails('A');

//Second way
function Bike(names){
    this.names = names;
}
Bike.prototype.getDetails = function(){
    return (`The name of the bike is ${this.names}.`);
}

let bike = new Bike('RE');
