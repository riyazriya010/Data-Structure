/*

The program how much space taking for a execute the output

space compexity  = Auxiliary Space + Input space


Using these we can analysis the space complexity:

O (1) - Constant Space

O (n) - Linear Space

O (log n) - Logarithmic Space

O (n^2) - Quadratic Space

*/

// Example: 1

// O(1) - constant
let a = 10 // this will take 64 bit -> 8 bytes
let b = 30 // this will take 64 bit -> 8 bytes 
console.log(a + b)


// Example: 2

// O(n) - Linear
let arr = [1,2,3,4,5] //  this will take more space according the the inputs given

// if there was an array and the constant space we want to take the linear space(more occuping space)
// Eg:
let a1 = 21
let b1 = 12
let c1 = [1,2,3,4,5] // this were occuping the more space
//The time complexity is O(N)


// Example: 3

// O(log N)


//Example: 4

// O(n^2)
//  2D array's all called as a O(n^2)
let arr2 = [[1,2,3],
            [4,5,6],
            [7,8,9]]
// the lengthe of N is 3 and we created 2D arrray with more nested array length 3



// Auxiliary Space complexity
// taking only the logic we implemented is auxiliary space complexity
function distinictValues (arr){

    let k = [] // auxiliary space O(N)
    for(let i = 0; i < arr.length; i++){
        if(!k.includes(arr[i])){
            k.push(arr[i])
        }
    }
    return k
}
const arr3 = [1,2,3,1,4,5,2]
console.log(distinictValues(arr3))

/* 
The most space occupying is arr3[] and k[] if take these both is
space complexity.

But we only take the k[] for auxiliary space

If the input is let l = 10 O(1) this is different space occupying from k[] O(N)
*/