import { Node } from "./mynode.mjs";

class MyTree{
    constructor(){
        this.root=null;
    }

    add(data){
        if(this.root===null){
            this.root = new Node(data);
            return true;
        }
        return this.addOn(this.root,data);
    }
    
    addOn(node, data){
        if(node.data===data) return false;
        if(node.data<data){
            if(node.right!==null){
                return this.addOn(node.right,data);
            }
            let n = new Node(data);
            node.right = n;
        }else{
            if(node.left!==null){
                return this.addOn(node.left,data);
            }
            let n = new Node(data);
            node.left = n;
        }
        return true;
    }

    inOrder(node=this.root){
        if(node===null) {return;}
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
}

let tree = new MyTree();
tree.add(11);
tree.add(63);
tree.add(99);
tree.add(45);
tree.add(10);
tree.add(55);
tree.add(33);
tree.add(29);

tree.inOrder();