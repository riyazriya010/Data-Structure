

// class Node{
//     constructor(value, k){
//         this.value = value
//         //initializing the array to hold up to k child node
//         this.children = new Array(k).fill(null)
//     }
// }


// class KaryTree{
//     constructor(k){
//         this.root = null
//         this.k = k
//     }

//     createNode(value){
//         return new Node(value, this.k)
//     }

//     addChild(parantNode, childNode, index){
//         if(index >= 0 && index < this.k){
//             parantNode.children[index] = childNode
//         }else{
//             return `Index ${index} is not valid`
//         }
//     }

//     bstSearch(value){
//         if(!this.root) return 'Root is null'

//         const queue = [this.root]

//         while(queue.length > 0){
//             const node = queue.shift()
//             if(node.value === value) return true

//             for(let child of node.children){
//                 if(child){
//                     queue.push(child)
//                 }
//             }
//         }
//         return `Not Found`
//     }
// }

// const tree = new KaryTree(3)

// const root = tree.createNode('A')
// const child1 = tree.createNode('B')
// const child2 = tree.createNode('C')
// const child3 = tree.createNode('D')

// const child4 = tree.createNode('R')
// const child5 = tree.createNode('L')

// tree.addChild(root, child1, 0)
// tree.addChild(root, child2, 1)
// tree.addChild(root, child3, 2)

// tree.addChild(child1, child4, 0)
// tree.addChild(child1, child5, 1)

// console.log(tree.bstSearch('B'))


class Node {
    constructor(value, k) {
        this.value = value;
        // Initializing the array to hold up to k child nodes
        this.children = new Array(k).fill(null);
    }
}

class KaryTree {
    constructor(k) {
        this.root = null;
        this.k = k;
    }

    createNode(value) {
        return new Node(value, this.k);
    }

    addChild(parentNode, childNode, index) {
        if (index >= 0 && index < this.k) {
            parentNode.children[index] = childNode;
        } else {
            return console.log(`Index ${index} is not valid`);
        }
    }


    bstSearch(value) {
        if (this.root === null) return null; // Return null if the root is null

        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            if (node.value === value) return true; // Return true if the value is found

            for (let child of node.children) {
                if (child) {
                    queue.push(child);
                }
            }
        }
        return false; // Return false if the value is not found
    }


    countChild(){
        if(!this.root) return false

        const queue = [this.root]
        let sum = 0

        while(queue.length){
            const node = queue.shift()
            let count = 0
            for(let child of node.children){
                if(child){
                    count++
                    queue.push(child)
                }
            }

            if(count === 3){
                sum += 1
            }
        }

        return sum
    }

}

// Example usage
const tree = new KaryTree(3);

const root = tree.createNode('A');
tree.root = root

const child1 = tree.createNode('B');
const child2 = tree.createNode('C');
const child3 = tree.createNode('D');

const child4 = tree.createNode('R');
const child5 = tree.createNode('L');
const child6 = tree.createNode('X');

const child7 = tree.createNode('H')

// adding child for root
tree.addChild(root, child1, 0);
tree.addChild(root, child2, 1);
tree.addChild(root, child3, 2);

// adding child for child1
tree.addChild(child1, child4, 0);
tree.addChild(child1, child5, 1);
tree.addChild(child1, child6, 2);

// adding child for child2
tree.addChild(child2, child7, 0)

console.log(tree.bstSearch('B')); // Output: true
console.log(tree.bstSearch('S')); // Output: false

console.log(tree.countChild())
