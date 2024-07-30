
class TrieNode{
    constructor(){
        this.children = {}
        this.isEndofWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndofWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndofWord
    }

    startsWith(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }

    printWord(node = this.root, word = '', result = []){
        if(node.isEndofWord){
            result.push(word)
        }
        for(let char in node.children){
            this.printWord(node.children[char], word + char, result)
        }
        return result
    }

    autoComplete(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return `${word} : No suggestion words found`
            }
            node = node.children[char]
        }
        return this.printWord(node, word)
    }

    suggest(word, maxSuggest = 5){
        let suggestion = this.autoComplete(word)
        let maxSugges = suggestion.slice(0, maxSuggest)
        return `${word} : ${maxSugges.join(' , ')}`
    }
    
}

const trie = new Trie()

trie.insert('Good')
trie.insert('Riyas')
trie.insert('Riyal')
trie.insert('Riyan')
trie.insert('Riya')
trie.insert('Rio')
console.log(trie.search('yaseer'))
console.log(trie.startsWith('R'))
console.log(trie.printWord())
console.log(trie.autoComplete('Ri'))
console.log(trie.suggest('Ri'))
