function LinkedList(){
  
}

LinkedList.prototype.search = function(match){
  let current = this.head;
  while(current){
    if(typeof match === 'function'){
      if(match(current.value)){
        return current.value;
      }
    }
    else {
      if(match === current.value){
        return current.value;
      }
    }
    current = current.next;
  }

}

LinkedList.prototype.addToHead = function(value){
  const node = { value };
  if(!this.head && !this.tail){
    this.head = this.tail = node;
  }
  else {
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
    
  }
}

LinkedList.prototype.addToTail = function(value){
  const node = { value };
  if(!this.head && !this.tail){
    this.head = this.tail = node;
  }
  else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
}

LinkedList.prototype.traverse = function(fn){
  let current = this.head;
  while(current){
    fn(current.value);
    current = current.next;
  }
}
LinkedList.prototype.removeFromHead = function(){
  if(!this.head && !this.tail){
    throw 'nooo';
  }
  const value = this.head.value;
  if(this.head === this.tail){
     this.head = this.tail = null;
  }
  else {
     this.head = this.head.next;
     this.head.previous = null;
  }
  return value;
}

LinkedList.prototype.removeFromTail = function(){
  if(!this.head && !this.tail){
    throw 'nooo';
  }
  const value = this.tail.value;
  if(this.head === this.tail){
     this.head = this.tail = null;
  }
  else {
     this.tail = this.tail.previous;
     this.tail.next = null;
  }
  return value;
}

LinkedList.prototype.traverseBackwards = function(fn){
  let current = this.tail;
  while(current){
    fn(current.value);
    current = current.previous;
  }
}

module.exports = LinkedList;
