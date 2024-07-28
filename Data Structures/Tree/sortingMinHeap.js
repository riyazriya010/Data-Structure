

class Node{
    constructor(array,size){
        this.array = array
        this.size = size
    }
}

class SortingMinHeap{
    constructor(array,size){
         this.root = new Node(array, size)
         this.buildMinHeap()
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

    sortedArray(){
        let sortedArr = []
        const originalSize = this.root.size

        this.minHeapify(0)

        while(sortedArr.length < originalSize){
            sortedArr.push(this.extractMin())
        }
        return sortedArr
    }

    extractMin(){
        if(this.root.size <= 0) return null

        if(this.root.size === 1) {
            this.root.size--
            return this.root.array[0]
        }

        let root = this.root.array[0]
        this.root.array[0] = this.root.array[this.root.size - 1]
        this.root.size--

        this.minHeapify(0)

        return root
    }

    minHeapify(index){
        let left = this.left(index)
        let right = this.right(index)
        let smallest = index

        if(left < this.root.size && this.root.array[left] < this.root.array[smallest]){
            smallest = left
        }

        if(right < this.root.size && this.root.array[right] < this.root.array[smallest]){
            smallest = right
        }

        if(smallest !== index){
            [this.root.array[index], this.root.array[smallest]] =
            [this.root.array[smallest], this.root.array[index]]
            this.minHeapify(smallest)
        }
    }

    buildMinHeap(){
        for(let i = Math.floor(this.root.size / 2) - 1; i >= 0; i--){
            this.minHeapify(i)
        }
    }
}

const arr = [7,4,3,9,8]
const sort = new SortingMinHeap(arr, arr.length)
console.log(sort.sortedArray())