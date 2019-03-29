

// 재귀를 이용한 팩토리얼(누승)호출 자기자신의-1을 한 것을 계속 곱하는 것
function factoral(n)  {
  if(n===0) {
    return 1;
  }
  else{
    return n * factoral(n-1);
  }
}

var k = 5;

console.log(factoral(k));
