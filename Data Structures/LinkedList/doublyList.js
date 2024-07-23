class ListNode{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}


class DoublyLinkedList{
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
        const node = new ListNode(value);
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
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
            node.prev = this.tail
            this.tail = node
        }
        this.size++
        return console.log('value appended')
    }


    insertAtIndex(value, index){
        if(index < 0 || index > this.size){
            return console.log(`Enter a valid Index`)
        }

        if(index === 0){
            return this.prepend(value)
        }else if(index === this.size){
            return this.append(value)
        }else{
            const node = new ListNode(value)
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            if(prev.next){
                prev.next.prev = node
            }
            prev.next = node
            node.prev = prev
            this.size++
            return console.log('value Added to the index')
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return console.log('List is empty')
        }

        if(this.head.value === value){
            if(this.head === this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
        }else{
            let curr = this.head
            while(curr && curr.value !== value){
                curr = curr.next
            }

            if(curr){
                if(curr === this.tail){
                    this.tail = curr.prev
                    this.tail.next = null
                }else{
                    curr.prev.next = curr.next
                    curr.next.prev = curr.prev
                }
            }
        }
        this.size--
        return console.log('value removed')
    }


    removeIndex(index){
        if(this.isEmpty()){
            return console.log('List is empty')
        }

        if(index < 0 || index > this.size){
            return console.log('Enter a valid Index')
        }
        
        if(index === 0){
            if(this.head === this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
        }else{
            let curr = this.head
            while(curr){
                curr = curr.next
            }

            if(curr){
                if(curr === this.tail){
                    this.tail = curr.next
                    this.tail.next = null
                }else{
                    curr.prev.next = curr.next
                    curr.next.prev = curr.prev
                }
            }
        }
        this.size--
        return console.log('value removed')
    }


    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            prev = curr.prev;
            curr.prev = curr.next;
            curr.next = prev;
            curr = curr.prev;
        }
        if (prev) {
            this.head = prev.prev;
        }
    }


    print(){
        if(this.isEmpty()){
            return console.log('List is Empty');
        }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
      }
    }
}

const list = new DoublyLinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.append(4)
list.append(100)
list.insertAtIndex(200, 4)
// list.removeIndex(5)
// list.removeValue(200)
list.print()
list.reverse()
list.print()
// console.log(list)