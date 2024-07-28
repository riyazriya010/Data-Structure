
class Node{
    constructor(cap){
        this.array = new Array (cap)
        this.capacity = cap
        this.heapSize = 0
    }
}

class MaxHeapBst{
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

    getMax(){
        if(this.root.heapSize <= 0){
            return null
        }

        return this.root.array[0]
    }

    extractMax(){
        if(this.root.heapSize <= 0) return null

        if(this.root.heapSize === 1){
            this.root.heapSize--
            return this.root.array[0]
        }

        let root = this.root.array[0]
        this.root.array[0] = this.root.array[this.root.heapSize - 1]
        this.root.heapSize--

        this.maxHeapify(0)

        return root
    }

    insertKey(value){
        if(this.root.heapSize === this.root.capacity){
            return console.log('Heap Overflow')
        }

        let i = this.root.heapSize
        this.root.array[i] = value
        this.root.heapSize++

        while(i !== 0 && this.root.array[this.parent(i)] < this.root.array[i]){
            // const parentIndex = this.parent(i)

            [this.root.array[i], this.root.array[this.parent(i)]] = [this.root.array[this.parent(i)], this.root.array[i]]
            i = this.parent(i)
        }
    }

    deleteKey(index){
        if(index < 0 || index >= this.root.heapSize){
            return console.log('Index out of bound')
        }

        this.decreaseKey(index, Infinity)
        this.extractMax()
    }

    decreaseKey(index, newVal){
        this.root.array[index] = newVal

        while(index !== 0 && this.root.array[this.parent(index)] < this.root.array[index]){

            [this.root.array[index], this.root.array[this.parent(index)]] =
            [this.root.array[this.parent(index)], this.root.array[index]]

            index = this.parent(index)
        }
    }

    maxHeapify(index){
        let left = this.left(index)
        let right = this.right(index)
        let biggest = index

        if(left < this.root.heapSize && this.root.array[left] > this.root.array[biggest]){
            biggest = left
        }

        if(right < this.root.heapSize && this.root.array[right] > this.root.array[biggest]){
            biggest = right
        }

        if(biggest !== index){
            [this.root.array[index], this.root.array[biggest]] =
            [this.root.array[biggest], this.root.array[index]]
            this.maxHeapify(biggest)
        }
    }

    display(){
        let heapValues = ''
        for(let i = 0; i < this.root.heapSize; i++){
            heapValues += `${this.root.array[i]} `
        }
        console.log(heapValues)
    }
}

const heap = new MaxHeapBst(10)

heap.insertKey(10)
heap.insertKey(100)
heap.insertKey(20)

heap.display()
heap.deleteKey(1)
heap.display()