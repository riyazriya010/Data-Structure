

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
    
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [-6,20,8,-2,4]
// console.log(mergeSort(arr))



function mergeSort(arr) {
    console.log()
    console.log("Current array:", arr); // Debug: print the current array

    if (arr.length < 2) {
        console.log("Returning array (base case):", arr); // Debug: print the array being returned (base case)
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    console.log("Left array:", leftArr); // Debug: print the left array
    console.log("Right array:", rightArr); // Debug: print the right array

    console.log('1')
    const sortedLeft = mergeSort(leftArr);
    console.log('2')
    const sortedRight = mergeSort(rightArr);
    console.log('3')

    console.log("Sorted left array:", sortedLeft); // Debug: print the sorted left array
    console.log("Sorted right array:", sortedRight); // Debug: print the sorted right array

    const mergedArray = merge(sortedLeft, sortedRight);

    console.log("Merged array:", mergedArray); // Debug: print the merged array

    return mergedArray;
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    console.log("Merging arrays:", leftArr, rightArr); // Debug: print the arrays to be merged

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    const result = [...sortedArr, ...leftArr, ...rightArr];
    console.log("Result after merging:", result); // Debug: print the result after merging

    return result;
}

const arr = [-6, 20, 8, -2, 4];
console.log("Final sorted array:", mergeSort(arr));
