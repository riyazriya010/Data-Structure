const LinkedList = require('./linkedList');

class QueueLinkedList{
    constructor(){
        this.list = new LinkedList()
    }

    isEmpty(){
        return this.list.size === 0
    }

    getSize(){
        return this.list.size
    }

    enQueue(value){
        this.list.append(value)
    }

    deQueue(){
        this.list.removeFormFirst()
    }

    print(){
        const values = this.list.print()
        console.log(values)
    }
}

const queue = new QueueLinkedList()

queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.deQueue()
queue.print()