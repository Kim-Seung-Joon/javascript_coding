class Stack{
  constructor(push,pop,peek,length,clear){
    this.dataStore = [];
    this.top = 0;
    this._push = push;
    this._pop = pop;
    this._peek = peek;
    this._length = length;
    this._clear = clear;
  }


  // 위의 빈 배열에 top이 가리키는 인덱스의 위치만큼 element를 대입한다.
  push(element) {
    this.dataStore[this.top++] = element;
  }

  pop() {
    return this.dataStore[--this.top];
  }

  peek()  {
    return this.dataStore[this.top-1];
  }

  length()  {
    return this.top;
  }

  clear() {
    this.top = 0;
  }
}



var s  = new Stack();

s.push("Alice");
s.push("Bob");
s.push("Carl");
s.push("David");

console.log("현재 스택의 길이는 : "+s.length());

// peek 1
console.log("현재 스택의 꼭대기는 : "+s.peek());

var popped = s.pop();

console.log("Pop1회 수행 : "+popped);

// peek 2
console.log("현재 스택의 꼭대기는 " +s.peek());

// push
s.push("Elise");

// peek 3
console.log("푸쉬이후 스택의 꼭대기는 : "+s.peek());


// 스택 클리어(초기화)
s.clear();

console.log("클리어 이후 스택의 길이는 : "+s.length());

s.push("왕건");
s.push("궁예");
s.push("견훤");

console.log(s.peek());