
// Node List is created
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


// Linked List is Created
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    //checking the list is empty or not
    isEmpty() {
        return this.size === 0
    }

    //getting the size of the list
    getSize() {
        return this.size
    }


    // time complexity Big O(1) no need to traverse, how much having in the list
    //adding the values in beginning of the node
    prepend(value) {
        const node = new ListNode(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }


    // time complexity Big O(n) - because want to traverse all the values till end
    //adding the values at end of the node
    append(value) {
        const node = new ListNode(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let pre = this.head;

            //this will run until it met the next === null
            while (pre.next) {
                pre = pre.next;
            }
            pre.next = node;
        }
        this.size++
    }


    //adding the values in with partical
    insertValueAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('Give a valid Index');
        }
        //if the index is 0 then calling the prepend method
        if (index === 0) {
            return this.prepend(value);
        } else {
            const node = new ListNode(value)
            let pre = this.head;
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next;
            }
            node.next = pre.next;
            pre.next = node;
            this.size++;
        }
    }

    // time complexity is Big O(n) want to traverse all the values
    // removing the node with index
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let pre = this.head
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next
            }
            removedNode = pre.next
            pre.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }
    

    //time complexity Big O(n) linear
    // removing the node with values
    removeValue(value) {
        if (this.isEmpty()) {
            return `List Is Empty`
        }

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value;
        } else {
            let prev = this.head
            let removedValue
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removedValue = prev.next
                prev.next = removedValue.next
                this.size--
                return value
            }
            return `${value} : Value Not Found`
        }
    }

    //time complexity Big O(logn)
    //finding the midValue
    finMidValue(){
        if(this.isEmpty()){
            return `List is Empty`
        }

        let midValue = Math.floor(this.size/2)
        let pre = this.head;
        for(let i = 0; i < midValue; i++){
            pre = pre.next
        }
        return this.removeValue(pre.value);
    }


    //search by value
    search(value){
        if(this.isEmpty()){
            return null
        }

        let curr = this.head
        let  i = 0;
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //reversing the list
    reverse(){
        if(this.isEmpty()){
            return null
        }

        let pre = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = pre
            pre = curr
            curr = next
        }
        this.head = pre
    }


    //printing the values of the list
    print() {
        if (this.isEmpty()) {
            console.log('This List is Empty')
        } else {
            let curr = this.head
            let listValues = ''

            //this while loop runs until the next === null
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
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

// console.log(list.detectCycle());
// list.reverse()
// list.print()
console.log(list)
