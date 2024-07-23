
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = ''
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)

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

    get(key){
        const index = this.hash(key)

        const bucket = this.table[index]
        if(bucket){
            const keyExist = bucket.find(item => item[0])
            if(keyExist){
                return keyExist[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)

        const bucket = this.table[index]
        if(bucket){
            const keyExist = bucket.find(item => item[0])
            if(keyExist){
                bucket.splice(bucket.indexOf(keyExist), 1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const hash = new HashTable()

hash.set('name', 'Riyas')
hash.set('mane', 'Vishnu G R')
hash.display()