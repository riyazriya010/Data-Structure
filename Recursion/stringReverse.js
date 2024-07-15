function strReverse(str){
    let s = ''
    let arr = str.split('')
    let i = arr.length-1

    function reverse(str,s){
        if(i < 0){
            return s
        }
         s += arr[i]
         i--
         return reverse(arr,s);
    }
   return reverse(arr,s)
}

const str = 'Riyas'
console.log(strReverse(str));