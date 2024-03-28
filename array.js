let arr = [5, 55, 78, 12, 1];
console.log(arr.length);
//add's element at the end of array
arr.push(60);
console.log(arr);
//delete's the end element and returns it
let pop = arr.pop();
console.log(pop);
console.log(arr);
//returns piece of array and endpoint(6) is excluded
console.log(arr.slice(3,6));
//changes original array (start, deleteCount, ele.,..)
arr.splice(1,1,45);
console.log(arr);
arr.splice(1,3,105);
console.log(arr);
//array to string
arr.toString();
console.log(arr);
//adds at starting if array
arr.unshift(50);
console.log(arr);
//delete from start and return the value
let shift = arr.shift();
console.log(shift);
console.log(arr);

let arr1 = [61, 75, 95, 12];
//adds 2 array and returns new array
let temp = arr.concat(arr1);
console.log(temp);
//change in original array
arr.forEach((val)=>{
    console.log(val);
})
arr.forEach((value, index, array) => {
    console.log(value,index,arr);
})
//returns new array
let map = arr.map((value)=>{
    return value+=10;
})
console.log(map);
//returns new array and condition must satisfy
let filter = arr.filter((val)=>{
    return val>100;
})
console.log(filter);
//reduces array to single digit 
let reduce = arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(reduce);
//string to array
let str = 'abcde';
let a = Array.from(str);
console.log(a);
console.log(a.includes('a'));
