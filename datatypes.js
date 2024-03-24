//Number
let a = 10;
let b = 12.5;
let c = 25.000;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//String
let d = 'd';
let e = "e";
let f = `the value of d is ${d}`;
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

//BigInt
let bigInt = BigInt("125453168453215");
console.log(typeof bigInt);

//Boolean
let g = true;
console.log(typeof g);

//Undefined
let h;
console.log(typeof h);

//Null
let i = null;
console.log(i);//null
console.log(typeof i);//object

//Symbol
let j = Symbol();
console.log(typeof j);

//Object
let x = [];
let y = {};
let z = new Date("2024-03-23");
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);