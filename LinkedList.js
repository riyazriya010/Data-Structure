class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    //to get the size
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new ListNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            let curr = this.head
            node.next = curr
            this.head = node
        }
        this.size++
        return console.log('value prepended');
    }
    

    append(value){
        const node = new ListNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return console.log('value appended')
    }


    print(){
         console.log(this.head.value)
         console.log(this.tail.value)
    }
}
const list = new LinkedList()
list.prepend(1)
list.prepend(7)
list.append(2)
list.print()