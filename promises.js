//1
let promis1 = new Promise(function(resolve,reject){
    resolve("Resolved successfull...");
});
promis1.then((msg)=>{
    console.log(msg);
});

//2
let promis2 = new Promise(function(resolve,reject){
    reject(new Error("Rejected!!!"));
});
promis2.catch((value) => {
    console.log(value);
})

//3
let solution = new Promise((resolve,reject)=>{
    if(!resolve){
        resolve("Resolved");
    }else{
        reject("Rejected");
    }
});
solution.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
})

//4
let sum = new Promise((resolve,reject)=>{
    return resolve(3);
});
sum.then((result)=>{
    return result+=3;
}).then((value) => {
    return value+=10;
}).then((value) => {
    value+=4;
    console.log(value);
})

//5
function sqr(a){
    return new Promise((resolve, reject)=>{
        console.log(a*a);
        resolve();
    })
}
sqr(2).then(()=>{
    sqr(3).then(()=>{
        sqr(4).then(()=>{})
    })
})