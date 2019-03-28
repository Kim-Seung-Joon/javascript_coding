
// square함수는 입력받은 nums라는 배열의 요소들을 각각 곱한것을 의미한다.
function square(num){
  console.log(num,num*num);
}

var nums = [1,2,3,4,5,6];

// foreach를 하면 입력받은 배열의 각요소의 인자를 함수로 호출!!
nums.forEach(square);


function isEven(num)  {
  return num % 2 == 0;
}

var evenNum = [2,4,6,8,5];
// every는 입력받은 값이 모두 true일때만 트루를 반환
var even = evenNum.every(isEven);


if(even)  {
  console.log("모든 배열의 값은 짝수 입니다.");
}
else{
  console.log("홀수 값이 존재 합니다.!!!");
}

// some는 그 안의 조건에서 1개라도 참이면 true를 반환하는 것이다.
var someOdd = evenNum.some(isEven);

if(someOdd) {
  console.log("홀수 값이 존재합니다.");
}

else  {
  console.log("홀수 값은 존재하지 않습니다.!!");
}

function add(total,value) {
  return total+value;
}

var reduceArray = [1,2,3,4,5,6,7,8,9,10]
var sum = reduceArray.reduce(add);

console.log(sum);