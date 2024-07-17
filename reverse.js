
function reverseStr(str){
    let stack = []

    //pushing values
    for(let val of str){
        stack.push(val)
    }

    //popping values
    let values = ''
    while(stack.length > 0){
        values += stack.pop()
    }

    return values
}

const str = 'Riyas'
// console.log(reverseStr(str))


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