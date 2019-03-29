function Stack()  {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}


// LIFO구조에서 top의 위치를 파악한 다음에 
// 거기에 넣고자 하는 값을 추가하고 top의 인덱스는 1 증가됨
function push(element)  {
  this.dataStore[this.top++] = element;
}

function pop()  {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}

// top의 인덱스는 스택에서 꼭대기 위치이기 때문에
// 즉 스택의 길이가 된다.
function length() {
  return this.top;
}

function clear(){
  this.top = 0;
}

var s = new Stack();
s.push("Alice");
s.push("Bob");
s.push("Carl");
s.push("David");

console.log("현재 스택의 길이는 : "+s.length());
console.log(s.peek());

var popped  = s.pop();

console.log("Pop 1회 수행\n"+popped);

console.log(s.peek());

// 푸쉬
s.push("Elise");
console.log(s.peek());

s.clear();

console.log("length : "+s.length());

console.log(s.peek());

s.push("Froyo");

console.log(s.peek());
