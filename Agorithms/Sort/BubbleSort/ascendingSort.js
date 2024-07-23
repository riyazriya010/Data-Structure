
// time complexity of bubble sort is

var bubbleSort = (num) => {
    let swapped
    do{
        swapped = false
        for(let i = 0; i < num.length - 1; i++){
            if(num[i] > num[i+1]){
                let temp = num[i]
                num[i] = num[i+1]
                num[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
        return num
}

const num = [-6,8,20,-2,4]
console.log(bubbleSort(num));
