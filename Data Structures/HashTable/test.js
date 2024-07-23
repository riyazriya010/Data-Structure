class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        const originalIndex = index
        while(this.table[index] && this.table[index][0] !== key){
            index = (index + 1) % this.size

            if(originalIndex === index){
                return console.log('Almost full')
            }
        }
        this.table[index] = [key, value]
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hash = new HashTable(10)

hash.set('name', 'Riyas')
hash.set('age', 23)
hash.display()
console.log()
// hash.set('mane', 'Shankar')
// hash.display()
console.log('hash: ',hash)
