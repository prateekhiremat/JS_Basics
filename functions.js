//regular functions
function add(x,y){
    return x+y;
}
console.log(add);
console.log(add(10,15));

//anonymous function
const sum = function(a,b){
    return a+b;
}
console.log(sum);
console.log(sum(20,30));

//arrow function
const mul = (a,b)=>a*b;
console.log(mul);
console.log(mul(5,6));

let student = {
    name:"Prateek",
    thisInRegularF(){
        console.log("student",this.name);
    },
    thisInArrowF:()=>{console.log("student",this.name);}
}
student.thisInRegularF();
student.thisInArrowF();