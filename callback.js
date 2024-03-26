//1
function sum(sumfun){
    sumfun(5,6);
}
sum((a,b)=>{
    console.log(a+b )
})

//2
const sqr = (a)=>{
    return a*a;
}
function print(){
    console.log(sqr(7))
}
print();

//3
const sub = (a,b)=>{
    console.log(a-b);
}
function solution(sub){
    sub(10,5);
    function subsolution(sub){
        sub(7,3);
    }
    subsolution(sub);
}
solution(sub);

//4
let printme = (funct)=>{
    console.log('printme');
    if(funct) funct();
}

printme(()=>{
    printme(()=>{
        printme(()=>{
            printme()
        })
    })
})

//5
function squar(a, callback){
    setTimeout(()=>{
        console.log(a*a);
        if(callback){
            callback();
        }
    },1000);
}
squar(1, ()=>{
    squar(2, ()=>{
        squar(3, ()=>{
            squar(4, ()=>{
                squar(5)
            })
        })
    })
})