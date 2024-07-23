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

    set(key, value){
        let index = this.hash(key)
        const originalIndex = index

        while(this.table[index] && this.table[index][0] !== key){
            index = (index + 1) % this.size
            
            if(index === originalIndex){
                return console.log('table full')
            }
        }
        this.table[index] = [key, value]
    }

    get(key){
        let index = this.hash(key)
        const OriginalIndex = index
        while(this.table[index]){
           if(this.table[index][0] === key){
            return this.table[index][1]
           }
           index = (index + 1) % this.size

           if(index === OriginalIndex){
            break
           }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const originalIndex = index
        while(this.table[index]){
            if(this.table[index][0] === key){
                this.table[index] = undefined
                return
            }
            if(index === originalIndex){
                break
            }
        }
        return
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
hash.set('mane', 'Yaseer')
hash.display()