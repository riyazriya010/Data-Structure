
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    bfs(start){
        const queue = [start]
        const visited = new Set()
        const result = []

        visited.add(start)

        while(queue.length){
            const vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbour => {
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            })
        }
        console.log(result)
    }

    
    dfs(start){
        const stack = [start]
        const visited = new Set()
        const result = []

        visited.add(start)

        while(stack.length){
            const vertex = stack.pop()
            result.push(vertex)
        

        this.adjacencyList[vertex].forEach(neighbour => {
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                stack.push(neighbour)
            }
        })
      }
      console.log(result)
    }

    // DFS to calculate the maximum depth from the start vertex
    findMaxDepth(start) {
        const stack = [[start, 0]];  // Stack holds vertex and its depth
        const visited = new Set();
        let maxDepth = 0;

        visited.add(start);

        while (stack.length) {
            const [vertex, depth] = stack.pop();
            maxDepth = Math.max(maxDepth, depth);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push([neighbor, depth + 1]);
                }
            });
        }

        return maxDepth;
    }

}

const graph = new Graph()

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')
graph.addVertex('g')
graph.addVertex('h')

graph.addEdges('a', 'e')
graph.addEdges('a', 'g')
graph.addEdges('a', 'b')
graph.addEdges('e', 'f')
graph.addEdges('e', 'd')
graph.addEdges('d', 'c')
graph.addEdges('f', 'b')
graph.addEdges('b', 'c')
graph.addEdges('b', 'g')
graph.addEdges('c', 'h')
graph.addEdges('h', 'b')

graph.bfs('a')
graph.dfs('a')

const maxDepth = graph.findMaxDepth('a');
console.log("Maximum depth from 'a':", maxDepth);