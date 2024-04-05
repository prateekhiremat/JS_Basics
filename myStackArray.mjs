export class MyStackArray{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    push(data){
        this.arr[this.arr.length]=data;
        this.size++;
    }

    pop(){
        if(this.arr.length===0){
            return new Error('Stack is Empty')
        }
        let val = this.arr[this.arr.length-1];
        this.arr.length=this.arr.length-1;
        this.size--;
        return val;
    }

    peek(){
        if(this.arr.length===0){
            return new Error('Stack is Empty')
        }
        return this.arr[this.arr.length-1];
    }

    isEmpty(){
        return this.arr.length===0;
    }

    printStack(){
        let str ='';
        for(let ele of this.arr){
            str = str + ele + ' ';
        }
        console.log(str);
    }
}

let stack = new MyStackArray();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

// stack.printStack();

// console.log(stack.pop());
// stack.printStack();

// console.log(stack.peek())
// stack.printStack();

// console.log(stack.isEmpty());

// console.log(stack.size);