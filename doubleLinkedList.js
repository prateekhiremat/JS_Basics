class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class MyDoubleLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let n = new Node(data);
        if(this.head===null){
            this.head = n;
            this.size++;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            temp=temp.next;
        }
        temp.next=n;
        n.prev = temp;
        this.size++;
    }

    addFirst(data){
        let n = new Node(data);
        if(this.head===null){
            this.head = n;
            this.size++;
            return;
        }
        n.next = this.head;
        this.head.prev = n;
        this.head = n;
        this.size++;
    }

    insert(data, index){
        if(this.head===null  || index===0){
            this.addFirst(data);
            return;
        }
        let temp = this.head;
        while(temp!==null && index>1){
            temp=temp.next;
            index--;
        }
        if(temp === null){
            console.log(new Error(`Index Out of Bound`));
            return;
        }
        let n = new Node(data);
        n.next = temp.next;
        temp.next.prev = n;
        n.prev = temp;
        temp.next = n;
        this.size++;
    }

    deleteFirst(){
        if(this.head===null){
            console.log(new Error(`List is empty`));
            return;
        }
        let val = this.head.data;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return val;
    }

    deleteLast(){
        if(this.head===null){
            console.log(new Error(`List is empty`));
            return;
        }
        let temp = this.head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        let val = temp.next.data;
        temp.next.prev = null;
        temp.next = null;
        this.size--;
        return val;
    }

    remove(index){
        if(this.head===null){
            console.log(new Error(`List is empty`));
            return;
        }
        if(index===0){
            let val = head.data;
            head = head.next;
            this.head.prev = null;
            return val;
        }
        let temp = this.head;
        while(temp!==null && index>1){
            temp=temp.next;
            index--;
        }
        if(temp === null){
            console.log(new Error(`Index Out of Bound`));
            return;
        }
        let val = temp.next.data;
        temp.next = temp.next.next;
        temp.next.prev = temp;
        return val;
    }

    toString(){
        let temp = this.head;
        let str = '';
        while(temp!==null){
            str += temp.data;
            if(temp.next!==null){
                str += ' -> '
            }
            temp = temp.next;
        }
        console.log(str)
    }
}

let list = new MyDoubleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);

// list.toString();
// list.addFirst(0);
// list.toString();

// list.insert(8, 5);
// list.toString();

// console.log(list.deleteFirst());
// list.toString();

// list.toString();
// console.log(list.deleteLast());
// list.toString();

// list.toString();
// console.log(list.remove(3));
// list.toString();