function bubbleSort(x){
    for(let i=0;i<x.length;i++){
        let j=0;
        while(j<x.length-i){
            if(x[j]>x[j+1]){
                let temp=x[j];
                x[j]=x[j+1];
                x[j+1]=temp;
            }
            j++;
        }
    }
    return x;
}
// console.log(bubbleSort([65,32,87,1,5,6,99]));

function insertionSort(x){
    for(let i=1;i<x.length;i++){
        let j=i-1;
        while(j>0){
            if(x[j]<x[j-1]){
                let temp = x[j];
                x[j] = x[j-1];
                x[j-1] = temp;
            }
            j--;
        }
    }
    return x;
}
// console.log(insertionSort([65,32,87,1,5,6,99]))

function selectionSort(x){
    for(let i=0;i<x.length;i++){
        let index=i;let small=x[i];
        for(let j=i;j<x.length;j++){
            if(small>x[j]){
                small=x[j];
                index=j;
            }
        }
        let temp=x[i];
        x[i]=x[index];
        x[index]=temp;
    }
    return x;
}
// console.log(selectionSort([65,32,87,1,5,6,99]))

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    
    while ( left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result,...left,...right]
}

// const arr = [8, 3, 1, 6, 4, 7, 2, 5];
// console.log("Original array:", arr);
// const sortedArr = mergeSort(arr);
// console.log("Sorted array:", sortedArr);

function quickSort(arr){
    if(arr.length===1){
        return arr;
    }
    let point = arr[0];
    let left = [];
    let right = [];
    let res = [];
    while(arr.length!==res.length){
        for(let i=1;i<arr.length;i++){
            if(point>arr[i]){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        left = quickSort(left);
        right = quickSort(right);
        res = [...left, point,...right];
    }
    return res;
}
// console.log(quickSort([65,32,45,56,20,90,87,1,5,6,99]))

function heapSort(arr) {
    function buildMaxHeap(arr) {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }
    function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if ( n > left && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }
    const n = arr.length;
    buildMaxHeap(arr);
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}
console.log(heapSort([65,32,87,1,5,6,99]));