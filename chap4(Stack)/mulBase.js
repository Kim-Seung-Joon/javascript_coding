// 진법변환 설명

/*
1. n의 가장 오른쪽 숫자는 n%b => 이 결과를 스택에 추가
2. n = n/b로 치환
3. n =0이 되고 나머지가 없을 때까지 1번, 2번 과정을 반복
4. 스택에 저장된 숫자를 모두 꺼내 변환된 숫자 문자열을 만들기

*/

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.length = length;
  
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function length() {
  return this.top;
}


// 2~9진수까지의 변환
function mulBase(num,base) {
  var s = new Stack();

  do  {
    s.push(num%base);
    num = Math.floor(num /=base);
  } while(num >0);

  var converted = "";

  while(s.length()>0) {
    converted +=s.pop();
  }

  return converted;
}


var num = 32;
var base = 2;
var newNum = mulBase(num,base);

console.log(num+"Converte to base "+ base + " is "+newNum);

num = 125;
base = 8;

var newNum = mulBase(num,base);
console.log(num + "Converte to base " + base + " is " + newNum);