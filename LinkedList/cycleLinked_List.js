class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
        this.arr = []
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
        }else{
           let prev = this.head
           while(prev.next){
            prev = prev.next
           }
           prev.next = node

           if(this.size > 2){
            node.next = this.head.next
           }
        }
        this.size++;
    }

    
    detectCycle(){
        if(this.head === null && this.head.next === null){
            return null
        }

        let slow = this.head
        let fast = this.head.next

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){
                return true
            }
        }

        return false
    }


    print(){
        if(this.isEmpty()){
            return null
        }else{

        let curr = this.head
        let listValues = ''
        let i = 0
        while(i !== this.size){
            listValues += `${curr.value} `
            curr = curr.next
            i++
        }
        console.log(listValues);
      }
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
console.log(list.detectCycle())