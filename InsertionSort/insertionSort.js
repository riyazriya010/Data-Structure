// time complexity in Big O(n^2)

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i]
        let j = i - 1 //storing the index value

        // iterate over the all the sorted elements
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j+1] = numberToInsert
    }
    return arr
}

const arr = [8, -2, 4, -6, 20 ,4]
console.log(insertionSort(arr))
