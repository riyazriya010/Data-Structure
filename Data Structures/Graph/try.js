class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }else{
        return console.log('Already Added')
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        let suggestion = ''

        for(let vertex of this.adjacencyList[vertex2]){
            suggestion += `${vertex } `
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
        
        console.log(`${vertex1} connected to ${vertex2}`)
        console.log(`Suggestion: [ ${suggestion}]`)

    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${Array.from(this.adjacencyList[vertex]).join(' ')}`)
        }
    }

}

const graph = new Graph()

// adding vertex [adduser]
graph.addVertex('Riyas')
graph.addVertex('Liston')
graph.addVertex('Jithin')
graph.addVertex('Sasi')
graph.addVertex('Sanooj')
graph.addVertex('Kiran')
graph.addVertex('Akil')

// adding Edge [connecting to others]
graph.addEdge('Riyas', 'Liston')
console.log()
graph.addEdge('Jithin', 'Riyas')
console.log()
graph.addEdge('Riyas', 'Sasi')
console.log()
graph.addEdge('Kiran', 'Sanooj')
console.log()
graph.addEdge('Sanooj', 'Liston')
console.log()
graph.addEdge('Akil', 'Sasi')
console.log()
graph.addEdge('Sasi', 'Liston')
console.log()
graph.display()

// displaying
// graph.display()
