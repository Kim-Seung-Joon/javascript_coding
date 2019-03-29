// 회문(앞으로 읽으나 뒤로 읽으나 그 글자의 결과가 같은 것 ex) 오디오...)


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

function isPalindrome(word) {
  var s = new Stack();
  for (var i =0; i<word.length;i++) {
    s.push(word[i]);
  }

  var rword = "";

  while(s.length()>0) {
    rword +=s.pop();
  }

  if(word === rword)  {
    return true;
  }

  else  {
    return false;
  }
}

var word = "hello";

if(isPalindrome(word))  {
  console.log("지금 들어 있는 문자"+word+"는 회문입니다.");
}
else{
  console.log("지금 들어 있는 문자"+word+"는 회문이 아닙니다.");
}

word = "racecar"
if (isPalindrome(word)) {
  console.log("지금 들어 있는 문자" + word + "는 회문입니다.");
}
else {
  console.log("지금 들어 있는 문자" + word + "는 회문이 아닙니다.");
}