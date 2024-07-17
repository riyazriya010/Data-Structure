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

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new ListNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            const curr = this.head
            this.head = node
            this.tail = curr
            node.next = curr
        }
        this.size++
        return
    }


    removeFormFirst(){
        if(this.isEmpty()){
            return console.log('Stack is empty');
        }else{
            this.head = this.head.next
        }
        this.size--
    }


    append(value){
        const node = new ListNode(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            let curr = this.tail
            this.tail = node
            curr.next = node
        }
        this.size++
        return console.log('value prepended')
    }

    print(){
        if(this.isEmpty()){
            return console.log('List is Empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            // console.log(listValues);
            return listValues
        }
    }
}

// const list = new LinkedList()

// list.prepend(20)
// list.prepend(1)
// list.append(3)
// list.print()

module.exports = LinkedList