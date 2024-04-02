let arr = [1, 2, 3, 4, 5, 6];

function push(array, data){
    array[array.length] = data;
}
// push(arr, 7);
// console.log(arr);

function pushAt(array, index, data){
    if(index<0 || index>array.length){
        console.log(new Error('Invalind Arguments'));
        return;
    }
    let temp = [];
    let j = 0;
    for(let i=0; i<array.length; i++){
        if(i<index){
            temp[j++]=array[i];
        }
        if(index===i){
            temp[j++]=data;
        }
        if(i>=index){
            temp[j++]=array[i];
        }
    }
    array.length=0;
    for(let ele of temp){
        array.push(ele);
    }
}
// pushAt(arr,2,7);
// console.log(arr);

function pop(array){
    let val = array[array.length-1];
    array.length=array.length-1;
    return val;
}
// console.log(pop(arr));
// console.log(arr);

function slice(array, start, end){
    if((start<=0 || start>=array.length) || start>end || (end<=0 || end>=array.length)){
        console.log(new Error('Invalind Arguments'));
        return;
    }
    let val = [];
    let j=0;
    for(let i=start; i<end; i++){
        val[j++] = array[i];
    }
    return val;
}
// console.log(slice(arr, 1, 3));
// console.log(arr);

function splice(array, start, deleteCount, ...elements){
    let res = [];
    let j=0;
    if(start>=array.length || start<0){
        console.log(new Error('Invalind Arguments'));
        return;
    }
    for(let i=0;i<array.length ;i++){
        if(i<start){
            res[j++]=array[i];
        }
        if(i===start){
            for(let ele in elements){
                res[j++]=elements[ele];
            }
        }
        if(i>=start+deleteCount){
            res[j++]=array[i];
        }
    }
    array.length=0;
    for(let i of res){
        array.push(i);
    }
}
// splice(arr,2,2,1);
// console.log(arr);

function toStrings(array){
    let str = '[';
    for(let i=0; i<array.length; i++){
        str += array[i];
        if(i<array.length-1){
            str +=', '
        }
    }
    str+=']';
    console.log(str);
}
// toString(arr);

function shift(array){
    let val = array[0];
    for(let i=1;i<array.length;i++){
        array[i-1]=array[i];
    }
    array.length=array.length-1;
    return val
}
// console.log(shift(arr));
// console.log(arr);

function unshift(array, ele){
    for(let i=array.length; i>=0; i--){
        if(i===0){
            array[i]=ele;
            return;
        }
        array[i]=array[i-1];
    }
}
// unshift(arr, 0);
// console.log(arr);

function concat(array1, array2){
    let res = [];
    let j=0;
    for(let val of array1){
        res[j++]=val;
    }
    for(let val of array2){
        res[j++]=val;
    }
    return res;
}
// console.log(concat(arr,[11,12,13]));

function includes(array, data){
    for(let val of array){
        if(val===data){
            return true;
        }
    }
    return false;
}
// console.log(includes(arr, 5));

function reverse(array){
    let f=0,l=array.length-1;
    while(f<l){
        let temp = array[f];
        array[f++] = array[l];
        array[l--] = temp;
    }
}
// reverse(arr);
// console.log(arr);

function join(array, data){
    let str = '';
    for(let i=0; i<array.length; i++){
        str += array[i];
        if(i<array.length-1){
            str +=data;
        }
    }
    console.log(str);
}
// join(arr, ',');