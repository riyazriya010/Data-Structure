
/*
   linear Probing:-
   hi(x) = (Hash(x) + i) % hash table size

   Quadratic Probing:-
   hi(x) = (Hash(x) + i^2) % hash table size

   Double Hasing:-
   hi(x) = (Hash(x) + i * Hash2(x)) % hashtableSize
*/


class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    // the find will loop through the array
    // time complexity is Big O(n) linear
    set(key, value){
        const index = this.hash(key)
        // return this.table[index] = value

        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameKeyExist = bucket.find(item => item[0] === key)
            if(sameKeyExist){
                sameKeyExist[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

     // the find will loop through the array
    // time complexity is Big O(n) linear
    get(key){
        const index = this.hash(key)
        // return this.table[index]

        const bucket = this.table[index]
        if(bucket){
            const keyExist = bucket.find(item => item[0] === key)
            if(keyExist){
                return keyExist[1]
            }
        }
        return undefined
    }

     // the find will loop through the array
    // time complexity is Big O(n) linear
    remove(key){
        const index = this.hash(key)
        // this.table[index] = undefined

        const bucket = this.table[index]
        if(bucket){
            const keyExist = bucket.find(item => item[0] === key)
            if(keyExist){
                bucket.splice(bucket.indexOf(keyExist),1)
            }
        }
    }


    //time complexity Big O(n), looping full array
    findUniqueValues(){
        let uniqueValues = new Set()
        for(const bucket of this.table){
            if(bucket){
                for(const [key, value] of bucket){
                    uniqueValues.add(value)
                }
            }
        }
        return uniqueValues
    }



    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const hash = new HashTable(50)

hash.set('name', 'Riyas')
hash.set('age', 23)
hash.set('mane', 'Suhaib')
hash.set('domain', 'Developer')
hash.set('role', 'Developer')
hash.display()
console.log()
// hash.set('name', 'Anu')
// hash.display()
// console.log()
// console.log(hash.get('name'))
// hash.remove('name')
// hash.display()
console.log(hash.findUniqueValues())

