// function findEvenOddCount(arr){
//     let evenCount = []
//     let oddCount = []

//     for(let i = 0; i < arr.length; i++){
//         let num1 = 0
//         let num2 = 0
//         let count = 0
//         let flag = 0
//         let num = String(arr[i]).split('')
//         for(let j = 0; j < num.length; j++){
//             if(Number(num[i]) % 2 === 0){
//                 count++
//                 flag = 1
//             }else if(Number(num[i] % 2 !== 0)){
//                 count++
//                 flag = 2
//             }
//             if(flag === 1){
//                 num1 += count
//             }else if(flag === 2){
//                 num2 += count
//             }
//         }
//         evenCount.push(num1)
//         oddCount.push(num2)
//     }

//     let evenIndex = evenCount.indexOf(Math.max(...evenCount))
//     let oddIndex = oddCount.indexOf(Math.max(...oddCount))


//     return [evenIndex, oddIndex];
// }


// const arr = [63839,6172,6291,891,3,467,357,9982,51996528,58828,1781992622,55555,222222]
// console.log(findEvenOddCount(arr))



class ListNode{
    constructor(value){
        this.value = value
        this.prev = null
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

    prepend(value){
        const node = new ListNode(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
        return console.log('Value Appended');
    }

    
}


function findEvenOddCount(arr) {
    let evenCount = [];
    let oddCount = [];

    for (let i = 0; i < arr.length; i++) {
        let num = String(arr[i]).split('');
        let even = 0;
        let odd = 0;

        for (let j = 0; j < num.length; j++) {
            if (Number(num[j]) % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }

        evenCount.push(even);
        oddCount.push(odd);
    }

    let maxEvenIndex = evenCount.indexOf(Math.max(...evenCount));
    let maxOddIndex = oddCount.indexOf(Math.max(...oddCount));

    return [maxEvenIndex, maxOddIndex];
}

const arr = [63839, 6172, 6291, 891, 3, 467, 357, 9982, 51996528, 58828, 1781992622, 55555, 222222];
const [evenIndex, oddIndex] = findEvenOddCount(arr);

console.log(`Number with most even digits: ${arr[evenIndex]} (Index: ${evenIndex})`);
console.log(`Number with most odd digits: ${arr[oddIndex]} (Index: ${oddIndex})`);
