class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size =  size
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
        let i = 1
        while(this.table[index] && this.table[index][0] !== key){
            index = (index + i * i) % this.size
            i++

            if(i === this.size){
                return console.log('tabe full')
            }
        }
        this.table[index] = [key, value]
    }

    get(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]){
            if(this.table[index][0] === key){
            return this.table[index][1]
            }

            index = (index + i * i) % this.size
            i++

            if(i === this.size){
                break
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let i = 1;
        while(this.table[index]){
            if(this.table[index][0] === key){
                this.table[index] = undefined
                return
            }
            index = (index + i * i) % this.size
            i++

            if(i === this.size){
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

const hash = new HashTable(10)
hash.set('name', 'Riyas')
hash.set('age', 23)
hash.set('mane', 'Yaseer')
hash.set('reviewer', 'Vishnu G R')
hash.set('domain', 'Developer')
hash.display()
console.log(hash.get('anme'));
hash.remove('age')
hash.display()