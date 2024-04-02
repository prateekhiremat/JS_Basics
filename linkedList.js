class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class MyLinkedList{
    constructor(){
        this.head = null;
    }

    add(data) {
        let n = new Node(data);
        if(this.head===null){
            this.head = n;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            temp=temp.next;
        }
        temp.next=n;
    }

    addFirst(data){
        let n = new Node(data);
        if(this.head===null){
            this.head = n;
            return;
        }
        n.next = this.head;
        this.head = n;
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
        temp.next = n;
    }

    deleteFirst(){
        if(this.head===null){
            console.log(new Error(`List is empty`));
            return;
        }
        let val = this.head.data;
        this.head = this.head.next;
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
        temp.next = null;
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
        return val;
    }

    length(){
        if(this.head===null){
            return 0;
        }
        let temp = this.head;
        let count = 0;
        while(temp!==null){
            count++;
            temp = temp.next;
        }
        return count;
    }

    isEmpty(){
        if(this.head===null){
            return true;
        }
        return false;
    }

    find(ele){
        let temp = this.head;
        while(temp!=null){
            if(temp.data===ele){
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    reversingList(){
        let prev = null;
        while(this.head!==null){
            let temp = this.head.next;
            this.head.next = prev;
            prev = this.head;
            this.head = temp;
        }
        this.head = prev;
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

let list = new MyLinkedList();
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

list.toString();
// console.log(list.deleteLast());
// list.toString();

// list.toString();
// console.log(list.remove(3));
// list.toString();

// list.toString();
// console.log(list.length());

// console.log(list.find(6));

// console.log(list.toString());

// list.toString();
// list.reversingList();
// list.toString();