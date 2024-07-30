

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function areMirror(node1, node2){
    if(node1 === null && node2 === null){
        return true
    }

    if(node1 === null || node2 === null){
        return false
    }

    return (node1.value === node2.value &&
        areMirror(node1.left, node2.right) &&
        areMirror(node1.right, node2.left)
    )
}

// Tree - 1
const root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.right.right = new Node(5)

// Tree - 2
const root2 = new Node(1)
root2.left = new Node(3)
root2.right = new Node(2)
root2.left.left = new Node(50)
root2.right.right = new Node(4)

console.log(areMirror(root1, root2)) // find both are mirror