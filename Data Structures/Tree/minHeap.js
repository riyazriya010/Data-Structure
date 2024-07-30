
/* Arranging heap data structure into Array structure (min - heap)

Formula to access the node
A[(i-1)/2] - returns the parent node
A[(2*i)+1] - returns the left node
A[(2*i)+2] - returns the right node


operations:-

getMini() - It returns the root element of Min Heap. Time Complexity of this operation is O(1)
getMax() - It returns the root element of Max Heap. Time Complexity of this operation is O(1)

extractMini(): Removes the minimum element from MiniHeap.
               Time complexity O(log n) as this operation needs to maintain heap property
               (by calling heapyfy())after removing root

insert(): inserting a new key takes O(log n)time, we add a new key at the end of the tree.
          If new key is greater that its parent, then we dont need to do anything. Otherwise we need to
          traverse up to fix the violated heap property.

delete(): Deleting a key is also taks time O(log n) time. We place the key to be deleted with minimum
          infinite by calling decreaseKey(). After decreaseKey(). the minus infinite value must reach root, so we call
          extractMin() to remove the key.

Heapify(): Heapify is the process of creating a heap data structure from a binary tree.
           It is used to create a Min-heap or Max-heap


Calcuting the height of the heap:

             2 
          /    \
        3        5
     /    \     / 
    15     4   45

    Root Level 0 = 2
    level 1 = 3, 5
    level 2 = 15, 4 45

    The level is 3 the height of the heap is (3 - 1) = 2
*/

class Node{
    constructor(cap){
        this.array = new Array(cap)
        this.capacity = cap
        this.heapSize = 0
    }
}

class MinHeapBst{

    constructor(cap){
        this.root = new Node(cap)
    }

    parent(index){

        return Math.floor((index - 1) / 2)
    }

    left(index){
        return (2 * index) + 1
    }

    right(index){
       return (2 * index) + 2
    }

    // returning the root element without removing
    getMin(){
        if(this.root.heapSize <= 0) return null // Heap is Empty
        
        return this.root.array[0]
    }

    // removing the root element and return
    extractMin(){
        if(this.root.heapSize <= 0) return null; // Heap is Empty
        
        if(this.root.heapSize === 1) { // Only one element in the heap
            this.root.heapSize--;
            return this.root.array[0]
        }

        // Store the min value to the root[0] variable and replace the last element to the rootNode
        let root = this.root.array[0]
        this.root.array[0] = this.root.array[this.root.heapSize - 1]
        this.root.heapSize--;

        this.minHeapify(0) // re-processing the heap data structure

        return root
    }

    // Method the insert the new value into the heap array
    insertKey(value){
        if(this.root.heapSize === this.root.capacity){
            console.log('Heap overflow');
            return
        }

        // store the value at the end
        let  i = this.root.heapSize
        this.root.array[i] = value
        this.root.heapSize++;

        //fix the heap property if it is violated
        while (i !== 0 && this.root.array[this.parent(i)] > this.root.array[i]) {
            // Compute parent index once and store it
            const parentIndex = this.parent(i);
        
            // Swap the current node with its parent
            [this.root.array[i], this.root.array[parentIndex]] = [this.root.array[parentIndex], this.root.array[i]];
        
            // Move up to the parent index
            i = parentIndex;
        }

    }

    // Method to delete a value at the given index
    deleteKey(index){
        if(index < 0 || index >= this.root.heapSize){
            return console.log('Index out of bounds')
        }

        // Decrease the value to minimum possible and then extract it
        this.decreaseKey(index, -Infinity)
        this.extractMin()
    }

    // Method to decrease the value at the given index
    decreaseKey(index, newVal) {
        this.root.array[index] = newVal;

        // Fix the heap property if it is violated
        while (index !== 0 && this.root.array[this.parent(index)] > this.root.array[index]) {
            const parentIndex = this.parent(index);

            // Swap the current element with the parent element
            [this.root.array[index], this.root.array[parentIndex]] =
                [this.root.array[parentIndex], this.root.array[index]];

            index = parentIndex;
        }
    }

    // Method to maintain the min heap property
    minHeapify(index){
        let left = this.left(index)
        let right = this.right(index)
        let smallest = index

        if(left < this.root.heapSize && this.root.array[left] < this.root.array[smallest]){
            smallest = left
        }

        if(right < this.root.heapSize && this.root.array[right] < this.root.array[smallest]){
            smallest = right
        }

        if(smallest !== index){
            // swap
            [this.root.array[index], this.root.array[smallest]] =
            [this.root.array[smallest],  this.root.array[index]]
            this.minHeapify(smallest)
        }
    }

    linearSearch(value){
        for(let i = 0; i < this.root.heapSize; i++){
            if(this.root.array[i] === value){
                return true
            }
        }
        return false
    }

    displayArr(){
        let heapValues = ''
        for(let i = 0; i < this.root.heapSize; i++){
            heapValues += `${this.root.array[i]} `
        }
        console.log('heapValues: ',heapValues.trim());
    }

    height(){
        return Math.ceil(Math.log2(this.root.heapSize + 1)) - 1
    }

}

const heap = new MinHeapBst(10)

// inser the values to the min Heap
heap.insertKey(15)
heap.insertKey(2)
heap.insertKey(3)
heap.insertKey(5)
heap.insertKey(4)
heap.insertKey(45)

// display the current heap array
heap.displayArr()

// heap.deleteKey(1)
// heap.displayArr()