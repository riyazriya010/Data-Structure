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
    }


    removeFormFirst(){
        if(this.isEmpty()){
            return console.log('Queue is empty');
        }else{
            this.head = this.head.next
        }
        this.size--
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

module.exports = LinkedList