function reverseArr(arr){
    let left = 0
    let right = arr.length - 1
    let midVal = Math.floor(arr.length / 2)

    function reverse(left,right){
        if(left > midVal){
            return arr
        }
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        return reverse(left +1, right -1)
    }

    return reverse(left,right)
}

const arr = [1,2,3,4,5,6,7]
console.log(reverseArr(arr));