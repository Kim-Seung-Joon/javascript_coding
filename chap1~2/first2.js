// 클래스 형식으로 Javascript이용하기
class Checking  {
  
  // Checking이라는 생성자를 만들면
  // this.balance에는 입력받은 amount가 들어간다
  constructor(amount){
    this.balance = amount;
  }

  // 저축함수는 원래 입력받은 값에 현재 입력받은 값을 추가한다.
  deposit(amount) {
    this.balance +=amount;
  }

  // 인출함수는 저장되어 있는 값에서 입력받은 값을 인출하고
  // 만약 인출하려는 금액이 너무크면 인출이 불가하다는 메시지를 띄우고 원래 금액은 저장되어있다.

  withdraw(amount) {
    if(amount <=this.balance){
      this.balance -=amount;
    }
    
    if(amount>this.balance) {
      console.log("인출금액이 너무 커서 인출이 불가합니다.!!");
    }
  }

  // 현재 어떠한 상태인지 출력하는 함수.
  toString()  {
    return "Balance:" +this.balance;
  }
}

const account = new Checking(500);
account.deposit(1000);

console.log(account.toString());

account.withdraw(750);

console.log(account.toString());

account.withdraw(800);

console.log(account.toString());