
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        // this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new ListNode(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
        return value
    }

    append(value) {
        const node = new ListNode(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }


    insertValueAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('Enter a valid Index');
        }

        if (index === 0) {
            return this.prepend(value);
        }else {
            const node = new ListNode(value);
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFromIndex(index){
        if(index === 0 && index >= this.size){
            return 'Enter a Valid Index'
        }
        if(index === 0){
            let removedNode = this.head
            this.head = this.head.next
            this.size--
            return console.log(`Value ${removedNode.value} Removed from the index ${index}`);
        }else{
            let pre = this.head
        for(let i = 0; i < index - 1; i++){
            pre = pre.next
        }
        const removedNode = pre.next
        pre.next = removedNode.next
        this.size--
        return console.log(`Value ${removedNode.value} Removed from the index ${index}`);
      }
    }


    removeValue(value){
        if(this.isEmpty()){
            return console.log('Cant remove value from Empty List')
        }
        
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return console.log(`Value ${value} removed`)
        }
        let prev = this.head
        let removedNode
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        if(prev.next){
            removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return console.log(`Value ${value} removed`)
        }
      return -1
    }

    search(value){
        if(this.isEmpty()){
            return console.log('No values to Search');
        }

        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value){
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }

    reverse(){
        if(this.isEmpty()){
            return console.log('List is Empty')
        }
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }


    print() {
        if (this.isEmpty()) {
            return console.log(`There was no List to Print`)
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
        return -1
    }

}

const list = new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(4)
list.append(34)
list.insertValueAtIndex(100, 4)
list.print()
console.log(list.getSize());

// console.log(list.search(34))
// list.reverse()
list.removeFromIndex(5)
list.search(100)
list.print()
// console.log(list.getSize())
