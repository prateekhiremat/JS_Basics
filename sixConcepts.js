//IIFE : Immediately Invoked Function Expressions
(function(){
    console.log('Immediately Invoked Function Expressions');
})();

((a,b)=>{
    console.log(a+b);
})(5,12);

function mul(a,b){
    return new Promise((resolve,reject)=>{
        resolve(a*b);
    })
}
(async()=>{
    let res = await mul(7,6);
    console.log(res);
})();

//prototypes
class Person{
    constructor(name){
        this.name = name;
    }
    name(){
        console.log(`name : ${this.name}`);
    }
}
// console.log(new Person());
const eat = {
    eat(){
    console.log(`eat`);
    }
}
const p = {};
p.__proto__ = eat;
console.log(p);

//Closures
function init(name='apple'){
    let fruit = name;
    function print(){
        console.log(name);
    }
    print();
}
init('pineapple');

//generaters
function* myIterator(start, end){
    for(let i=start; i<end; i++){
        yield i;
    }
}
const arr = myIterator(0,10);
for(let val of arr){
    console.log(val)
}

//apply, bind, call
let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age,h,a,b) { 
		console.log(this.name + " age is " + age + h + a + b); 
	} 
} 

PrintName.sayHi();

const print = PrintName.sayHi.call(nameObj, 42 , 50 , 60);

const print2 = PrintName.sayHi.bind(nameObj,50,60,30); 

PrintName.sayHi.apply(nameObj,[50, 25,30]);