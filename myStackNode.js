class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class MyStackNode{
    constructor(){
        this.head = null;
    }

    push(data){
        let n = new Node(data);
        if(this.head===null){
            this.head = n;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            temp = temp.next;
        }
        temp.next = n;
    }

    pop(){
        if(this.head===null){
            console.log(new Error(`Underflow`));
            return;
        }
        let temp = this.head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        let val = temp.next.data;
        temp.next = null;
        return val;
    }

    peek(){
        let temp = this.head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        let val = temp.next.data;
        return val;
    }

    isEmpty(){
        return this.head===null;
    }

    printStack(){
        let temp = this.head;
        let str = '';
        while(temp!==null){
            str += temp.data + ' ';
            temp = temp.next;
        }
        console.log(str)
    }
}

let stack = new MyStackNode();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
stack.push('E');
stack.push('F');

// stack.printStack();

// console.log(stack.pop())

// stack.printStack();

// console.log(stack.peek());

// console.log(stack.isEmpty());