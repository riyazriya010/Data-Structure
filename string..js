function convertToUpperCase(str){
    if(!str) return str

    firstChar = str[0]
    restString = ''

    for(let i = 1; i < str.length; i++){
        restString += str[i]
    }

    if(firstChar >= 'a' && firstChar <= 'z'){
        firstChar = String.fromCharCode(firstChar.charCodeAt(0) - 32)
    }

    return firstChar + restString
}

const str = 'hello'
console.log(convertToUpperCase(str))



// let num = 12345
// let sum = 0

// while(num > 0){
//     console.log()
//     console.log('num: ',num)
//     let lastNum = num % 10
//     console.log('lastNum: ',lastNum)
//     sum += lastNum
//     console.log('sum: ',sum)
//     num = Math.floor(num / 10)
//     console.log('num: ',num)
// }
// console.log(sum)


//find the first non repeating values

function findNonRepeat(str){
    
    const charObj = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(charObj[char] === undefined){
            charObj[char] = 1
        }else{
            charObj[char]++
        }
    }

    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(charObj[char] === 1){
            return char
        }
    }
    return null
}
console.log(findNonRepeat('swusses'))