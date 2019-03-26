function Checking(amount) {
  this.balance = amount; // 프로퍼티
  this.deposit = deposit; // 함수
  this.withdraw = withdraw; //함수
  this.toString  = toString; //함수
}

// 잔액을 예금(저축)
function deposit(amount){
  this.balance +=amount;
}

// 잔액을 인출(마이너스)
function withdraw(amount) {
  if(amount<=this.balance)  {
    this.balance  -=amount;
  }
  // 통장에 잔고가 다 떨어지면
  if(amount>this.balance) {
    console.log("인출금액이 커서 인출이 불가합니다.!!");
  }
}

function toString() {
  return "Balance: "+this.balance;
}


// account라는 Checking생성자의 변수를 선언
var account = new Checking(500);
account.deposit(1000);

//1500
console.log(account.toString());

// 1500 - 750
account.withdraw(750);

console.log(account.toString());

// 1500- 750 - 800 < 1500 보다 작아지므르
// 잔액이 부족합니다.가 출력
account.withdraw(800);

console.log(account.toString());