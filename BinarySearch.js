
function findTarget(arr, target) {
    let rightIndex = arr.length - 1
    let leftIndex = 0

    while (leftIndex < rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === arr[midIndex]){
            arr[midIndex] = 0
                return arr;
        }

        if(target > arr[midIndex]){
           leftIndex = midIndex + 1
        }else{
            rightIndex = midIndex - 1
        }
 }

 return -1

}

const arr = [1, 2, 3, 4, 5]
const target = 3

console.log(findTarget(arr, target));



//    /*      find first occurrence of the duplicate    */
//    function midOccurrence(arr, target) {
//     // Helper function to find the first occurrence of the target
//     function findFirstOccurrence(arr, target) {
//         let left = 0;
//         let right = arr.length - 1;
//         let firstOccurrence = -1;
        
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
            
//             if (arr[mid] === target) {
//                 console.log('Fmid: ',mid)
//                 firstOccurrence = mid;
//                 right = mid - 1;
//             } else if (arr[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
        
//         return firstOccurrence;
//     }
    
//     // Helper function to find the last occurrence of the target
//     function findLastOccurrence(arr, target) {
//         let left = 0;
//         let right = arr.length - 1;
//         let lastOccurrence = -1;
        
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
            
//             if (arr[mid] === target) {
//                 console.log('Smid: ',mid)
//                 lastOccurrence = mid;
//                 left = mid + 1;
//             } else if (arr[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
        
//         return lastOccurrence;
//     }

//     // Find the first and last occurrence of the target
//     let firstOccurrence = findFirstOccurrence(arr, target);
//     let lastOccurrence = findLastOccurrence(arr, target);
    
//     // If the target is not found in the array, return -1
//     if (firstOccurrence === -1 || lastOccurrence === -1) {
//         return -1;
//     }
    
//     // Calculate the middle occurrence index
//     let midIndex = Math.floor((firstOccurrence + lastOccurrence) / 2);
//     return midIndex;
// }

// // Example usage:
// const arr1 = [1, 2, 2, 2, 3, 4, 5];
// const target1 = 2;
// console.log(midOccurrence(arr1, target1)); // Output: 2

