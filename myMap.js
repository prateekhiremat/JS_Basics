class Node{
    constructor(key, value){
        this.key=key;
        this.value=value;
        this.next = null;
    }
}

class MyMap{
    constructor(){
        this.head = null;
        this.size = 0;
        this.key = null;
        this.value = null;
    }

    set(key, value){
        let n = new Node(key, value);
        if(this.head===null){
            this.head = n;
            this.size++;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            if(temp.key===key){
                temp.value=value;
                return;
            }
            temp = temp.next;
        }
        temp.next=n;
        this.size++;
    }

    get(key){
        if(this.head===null) return new Error('Empty Table');
        let temp = this.head;
        while(temp!==null){
            if(temp.key===key) return temp.value;
            temp = temp.next;
        }
        return undefined;
    }

    has(key){
        if(this.head===null) return new Error('Empty Table');
        let temp = this.head;
        while(temp!==null){
            if(temp.key===key) return true;
            temp = temp.next;
        }
        return false;
    }

    delete(key){
        if(this.head===null) return new Error('Empty Table');
        let temp = this.head;
        while(temp!==null){
            if(temp.next.key===key) break;
            temp = temp.next;
        }
        if(temp===null) return false;
        if(temp.next.next!==null) { temp.next = temp.next.next }
        else { temp.next = null }
        return true;
    }

    clear(){
        this.head=null;
    }

    entries(){
        let str = `[\n`;
        let temp = this.head;
        while(temp!=null){
            str = `${str} [ ${temp.key}, ${temp.value} ]`;
            if(temp.next!==null) str+=`,\n`;
            temp=temp.next;
        }
        str+=`\n]`
        console.log(str);
    }

    keys(){
        let str = `[`;
        let temp = this.head;
        while(temp!=null){
            str = `${str}${temp.key}`;
            if(temp.next!==null) str+=`, `;
            temp=temp.next;
        }
        str+=`]`
        console.log(str);
    }

    values(){
        let str = `[`;
        let temp = this.head;
        while(temp!=null){
            str = `${str}${temp.value}`;
            if(temp.next!==null) str+=`, `;
            temp=temp.next;
        }
        str+=`]`
        console.log(str);
    }
}
let map = new MyMap();
map.set(1,'A');
map.set(2,'B');
map.set(3,'C');
map.set(4,'D');
map.set(5,'E');
map.set(3,'F');

// map.entries();
// console.log(map.size);

// console.log(map.get(4));

// console.log(map.delete(3));
// map.entries();

// map.clear();

// map.keys();
// map.values();