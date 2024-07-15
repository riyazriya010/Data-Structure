

       /*   recursive Binary Search    */

function binarySearch(arr,target){
    return recursiveBinarySearch(arr, target, 0, arr.length-1)
}

function recursiveBinarySearch(arr, target, leftIndex, rightIndex){
    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex + rightIndex)/2)
        if(target === arr[midIndex]){
            return midIndex // target found
        }else if(target < arr[midIndex]){
            return recursiveBinarySearch(arr, target, leftIndex, midIndex - 1)
        }else{
            return recursiveBinarySearch(arr, target, midIndex + 1, rightIndex)
        }
    }
    return -1
}

const arr = [1,2,3,4,5,6,7]
const target = 6
console.log(binarySearch(arr, target));




     /*          recursive Fibonacci    */

     function fibonacci(target, first, second){
        let arr = [first, second]; // Initialize the array with the first two numbers
    
        function generateFib(target, first, second){
            if (arr.length >= target) {
                return arr.slice(0, target); // Return only the required number of elements
            }
            let next = first + second;
            arr.push(next);
            return generateFib(target, second, next); // invoking itself
        }
    
        return generateFib(target, first, second); //invoking the innner function
    }
    

console.log(fibonacci(7, 0, 1)); //invoking the outer function



   /*        recursive factorial      */
   
   function fact(n){
    if(n === 0){
        return 1
    }

    return n*fact(n-1)
   }
   console.log(fact(5))

   
   /*      recursive sum of arr    */
   function sum(arr){
    let sum = 0
    let i = 0

    function recSum(){
        if(i >= arr.length){
            return sum
        }

        sum += arr[i];
        i++

        return recSum()
    }
    return recSum()
   }
   const arr2 = [1,2,3,4,5];
   console.log(sum(arr2))
   