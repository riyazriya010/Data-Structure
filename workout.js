
// bubble sort
function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
        return arr
}

//insertionSort
function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j+1] = numberToInsert
    }
     return arr
}

// quick sort
function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    const pivot = arr[arr.length - 1]

    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }

    let sortedLeft = quickSort(left)
    let sortedRight = quickSort(right)

    let result = [...sortedLeft, pivot, ...sortedRight]
    return result
}

//merge Sort
function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }

    const mid = Math.floor(arr.length / 2)

    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

function merge(leftArr, rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] >= rightArr[0]){
            sortedArr.push(rightArr.shift())
        }else{
            sortedArr.push(leftArr.shift())
        }
    }

    let result = [...sortedArr, ...leftArr, ...rightArr]
    return result
}

const arr = [-6, 20, 8, -2, 4, 1]
console.log('bubble sort: ',bubbleSort(arr))
console.log('insertionSort: ',insertionSort(arr))
console.log('quickSort: ',quickSort(arr))
console.log('mergeSort: ',mergeSort(arr))

