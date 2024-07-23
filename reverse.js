
// stack reverse

function stackReverse(str){
    if(!str){
        return str
    }

    let stack = []
    let i = 0
    while(i < str.length){
        stack.unshift(str[i])
        i++
    }

    let reverstr = ''
    while(stack.length > 0){
        reverstr += stack.shift()
    }

    return reverstr
}
const str = 'Riyas'
console.log('stack: ',stackReverse(str))

  // string reverse

  function queueReverse(str){
    if(!str){
        return str
    }

    let queue = []
    let i = 0;
    while(i < str.length){
        queue.push(str[i])
        i++
    }

    let reverStr = ''
    while(queue.length > 0){
        reverStr += queue.shift()
    }

    return reverStr

  }

  const str1 = 'Riyas'
  console.log(queueReverse(str1))

const embeddedArray = [
                       {name: 'Riyas', age:23},
                       {name: 'Sanooj', age: 20},
                       {name: 'Liston', age:21}
                       ]

console.log(bubbleSort(embeddedArray))

function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i].age > arr[i+1].age){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)

        return arr
}