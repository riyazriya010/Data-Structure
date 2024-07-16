// recursive method
// time coplexity: Worst case - Big O(n^2), Average case - Big O(n)
// this method is not good for space complexity


function quickSort(arr) {
    console.log()
    console.log("Current array:", arr); // Debug: print the current array

    if (arr.length < 2) {
        console.log("Returning array (base case):", arr); // Debug: print the array being returned (base case)
        return arr;
    }

    let pivot = arr[arr.length - 1];
    console.log("Pivot:", pivot); // Debug: print the pivot value

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log("Left array:", left); // Debug: print the left array
    console.log("Right array:", right); // Debug: print the right array

    console.log('1')
    let sortedLeft = quickSort(left); // Debug: recursively sort the left array
    console.log('2')
    let sortedRight = quickSort(right); // Debug: recursively sort the right array

    console.log("Sorted left array:", sortedLeft); // Debug: print the sorted left array
    console.log("Sorted right array:", sortedRight); // Debug: print the sorted right array

    let result = [...sortedLeft, pivot, ...sortedRight];
    console.log("Result after concatenation:", result); // Debug: print the result after concatenation

    return result;
}

const arr = [-2, 20, 8, -6, 4];
console.log("Final sorted array:", quickSort(arr));
