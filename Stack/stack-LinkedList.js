const LinkedList = require('./linkedList.js');

class StackLinkedList{
    constructor(){
        this.list = new LinkedList()
    }

    isEmpty(){
        return this.list.size === 0
    }

    getSize(){
        return this.list.size
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        this.list.removeFormFirst()
    }

    print(){
        const values = this.list.print()
        console.log(values)
    }
}

const stack = new StackLinkedList()

stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
stack.pop()
stack.print()


