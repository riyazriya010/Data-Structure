/* 

Time comolexity means the code takes time to complete its execution

Popular Notations in Complexity Analysis of Algorithms:

* Omega Notation ( Best case )
* Theta Notation ( Average case )
* Big O Notation  ( Worst case )

We Mostly use the Big O ( worst case ) for algorithm
Eg:- Linear Search

If there was an array we want to find the target from the array, the target may be
first index (or) middle index (or) last index

First index = Best Case
Middle index = Average Case
Last Index (or) target not present in the array = Worst Case



Using these we can analysis the time complexity:

O (1) - Constant Time

O (n) - Linear Time

O (log n) - Logarithmic Time

O (n log n) - Linearithmic Time

O (n^2) - Quadratic Time

O(n^3) - Cubic Time

O(2n) - Exponential Time

𝑂(𝑛!) - Factorial Time

*/


// Big O Notation:

// Example: 1

// two operations are there
let a = 10 // this will run one time
let b = 20 // this will run one time
console.log(a + b)  // ( operation 1 ) this will run one time 
console.log(10 + 20) // ( operation 2 ) this will run one time

// This each line of code will run only once if i run more 
// time also, so the time complexity is O(1) constant


// Example: 2

//find the target index
function targetIndex(arr, target){ // this will run one time

    for(let i = 0; i < arr.length; i++){ // this loop will run N times

        if(target === arr[i]){
            return arr.indexOf(target)// this will run once, but in the worst case, it could be O(N)
        }
    }
}

let arr = [2,3,5,6,1,4] // this will run one time
let target = 4  // this will run one time
console.log(targetIndex(arr, target)) // this will run one time


/* function targetIndex(arr, target)  this will run O(1)
he arr [2,3,5,6,1,4] this will rum O(1)
target  = 4 this will run 1 time O(1)
console.log(targetIndex(arr, target)) this will run O(1)

condition and return statement:
if(target === arr[i]) this will run O(N) times
return arr.indexOf(target) this will run O(N) times in the worst case

Total time complexity:
In the best case the O(1) if the index is first
In the wors case the target index last or not found in array

* The for loop O(N)
* The return statement O(N) in worst case
O(N) + O(N) = The time complexity is O(N)

*/


// Example: 3

// arrange in ascending order
function ascendingOrder(arr){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
const arr1 = [2,4,5,1,3]
console.log(ascendingOrder(arr1))

/* 
The loops will run in N^2, becase the outer loop will run 5 times the inner loop will
run 5 times for each outer loop iteration.
*/