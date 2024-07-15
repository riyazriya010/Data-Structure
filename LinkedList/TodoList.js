class ListedNode{
    constructor(task){
        this.task = task
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    addTask(task){
        const node = new ListedNode(task)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
        return
    }

    taskCompleted(index){
       let curr = this.head
       let i = 0
       while(curr){
        if(i === index - 1){
            curr.task += ' ( completed )'
            return
        }
        curr = curr.next
       }
    }

    removeTask(index) {
        if (this.isEmpty()) {
            console.log('No tasks to remove');
            return;
        }

        if (index < 1 || index > this.size) {
            console.log('Enter a Valid Index');
            return;
        }

        let curr = this.head;

        if (index === 1) {
            this.head = curr.next;
        } else {
            let prev = null;
            let i = 1;

            while (i < index) {
                prev = curr;
                curr = curr.next;
                i++;
            }

            prev.next = curr.next;
        }

        this.size--;
        return;
    }


    displayTask(){
        if(this.isEmpty()){
            return console.log('No Task To Display');
        }else{
            let curr = this.head
            let arr = []
            let i = 1
            while(curr){
                arr.push(`${i}. ${curr.task}`)
                i++
                curr = curr.next
            }
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i])
            }
        }
    }
}

const todo = new LinkedList()


todo.addTask('Learn JavaScript');
todo.addTask('Node');
todo.addTask('MongoDB');
todo.taskCompleted(1)
todo.removeTask(3)
todo.displayTask()