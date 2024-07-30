class Node{
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class Bst{
    constructor(){
      this.root = null
    }
  
    isEmpty(){
      return this.root === null
    }
  
    insert(value){
      const newNode = new Node(value)
      if(this.isEmpty()){
        this.root = newNode
      }else{
        this.insertNode(this.root, newNode)
      }
    }
  
    insertNode(root, newNode){
      if(root.value > newNode.value){
        if(root.left){
          this.insertNode(root.left, newNode)
        }else{
          root.left = newNode
        }
      }else{
        if(root.right){
          this.insertNode(root.right, newNode)
        }else{
          root.right = newNode
        }
      }
    }
  
    checkBinary(root) {
      let found = true;
  
      if (root) {
        // Check left child if it exists
        if (root.left) {
          if (root.value <= root.left.value) {
            found = false;
          } else {
            found = this.checkBinary(root.left) && found;
          }
        }
  
        // Check right child if it exists
        if (root.right) {
          if (root.value >= root.right.value) {
            found = false;
          } else {
            found = this.checkBinary(root.right) && found;
          }
        }
      }
  
      return found;
    }
  
    
  }
  const tree = new Bst()
  
  tree.insert(10)
  tree.insert(15)
  tree.insert(5)
  tree.insert(3)
  tree.insert(2)
  console.log(tree.checkBinary(tree.root))