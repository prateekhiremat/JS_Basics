class MyQueue{
    constructor(){
        this.arr = [];
        this.size = 0
    }

    enqueue(data){
        this.arr[this.arr.length]=data;
        this.size++;
    }

    dequeue(){
        let val = this.arr[0];
            for(let i=1;i<this.arr.length;i++){
                this.arr[i-1]=this.arr[i];
            }
        this.arr.length=this.arr.length-1;
        this.size--;
        return val
    }

    peek(){
        if(this.arr.length===0){
            return new Error('Stack is Empty')
        }
        return this.arr[0];
    }

    isEmpty(){
        return this.arr.length===0;
    }

    printQueue(){
        let str ='';
        for(let ele of this.arr){
            str = str + ele + ' ';
        }
        console.log(str);
    }
}

let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

// queue.printQueue();

// console.log(queue.dequeue());
// queue.printQueue();

// console.log(queue.peek());


// console.log(queue.isEmpty());