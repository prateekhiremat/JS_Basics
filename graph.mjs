import { MyQueue } from "./myQueue.mjs";
import { MyStackArray } from "./myStackArray.mjs";

class Edge{
    constructor(src, dest, weg=0){
        this.src = src;
        this.dest = dest;
        this.weg = weg;
    }
}
class MyGraph{
    constructor(){
        this.graph = [];
    }

    add(...edge){
        this.graph[this.graph.length] = [...edge];
    }
    //Breadth First Search
    bfs(){
        let visited = [];
        let queue = new MyQueue();
        let str = '';
        let start = this.graph[0][0].src;
        queue.enqueue(start);

        while(!queue.isEmpty()){
            let val = queue.dequeue();
            if(!visited.includes(val)){
                str+=val+' ';
                visited.push(val);
            }
            for(let vertex of this.graph[val]){
                if(!visited.includes(vertex.dest))
                queue.enqueue(vertex.dest);
            }
        }
        console.log(str);
    }
    // Depth First Search
    dfs(start=this.graph[0][0].src,visited=[],stack=new MyStackArray()){
        stack.push(start);
        visited.push(start);

        for(let i=0; i<this.graph[i].length;i++){
            let e = this.graph[i][i].dest;
            if(!visited.includes(e)){
                this.dfs(e,visited,stack);
                stack.pop();

        for(let i=0; i<this.graph[start].length;i++){
            let e = this.graph[start][i].dest;
            if(!visited.includes(e)){
                this.dfs(e,visited,stack);
            }
        }
        return visited;
    }

    // dfs(node=this.graph[0],result=[],visited=[],stack=new MyStackArray()){
    //     stack.push(node);
    //     visited.push(node);
    //     result.push(node[0].src);
    //     for(let i=0; i<this.graph.length;i++){
    //         if(!visited.includes(this.graph[i])){
    //             this.dfs(this.graph[i],result,visited,stack);
    //             stack.pop();
    //         }
    //     }
    //     return result;
    // }
}
//   0
//    \    3
//     \  / \
//      2 -- 1
//
let str = new MyGraph();
str.add(new Edge(0,2));
str.add(new Edge(1,3), new Edge(1,2));
str.add(new Edge(2,0), new Edge(2,3));
str.add(new Edge(3,2), new Edge(3,1));

// console.log(str.graph);//structure of graph

// console.log(str1.graph[2]);

// console.log(str1.graph[3].length);//no. of adjecent,neighbouring node/vertex

// str.bfs();
console.log(str.dfs())

//     1 --- 3
//    /      | \
//   0       |  5 -- 6
//    \      | /
//     2 --- 4

let stru = new MyGraph();
stru.add(new Edge(7,1), new Edge(7,2));
stru.add(new Edge(1,7), new Edge(1,3));
stru.add(new Edge(2,7), new Edge(2,4));
stru.add(new Edge(3,1), new Edge(3,4), new Edge(3,8));
stru.add(new Edge(4,2), new Edge(4,3), new Edge(4,8));
stru.add(new Edge(8,3), new Edge(8,4), new Edge(8,6));
stru.add(new Edge(6,8));

stru.bfs();
// console.log(stru.dfs());