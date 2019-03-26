// 배열의 2가지 선언방법
var number1 = new Array(1,2,3,4,5);
var number2 = [1,2,3,4,5]

console.log(number1);
console.log(number2);

// 배열에는 여러가지 요소가 들어가도 큰 상관은 없다.
var object = [1,"왕건",true,null];

console.log(object);

const sentence = "태조왕건은 고려를 세운 사람이다.";

var words = sentence.split(" ");

for(var i =0; i <words.length;i++){
  console.log("word "+i+" : "+words[i]);
}

// 배열에 대입하는 방법1(레퍼런스로 대입, 원래 배열의 값을 변경하면 할당된 배열의 값도 같이 변경 된다 == 얕은복사)
var nonum = [];

for(var i =0 ; i<100; ++i)  {
  nonum[i] = i;
  // console.log(nonum[i]);
}

var samenonum = nonum;
// nonum[0] = 300;
nonum[0] = 300;
// samenonum[0] = 300;
console.log(samenonum[0]);

// 깊은 복사(원래 배열의 값이 변경되어도 새로 복사된 배열의 값에는 영향을 주지 못한다.!!!!)

function copy(arr1,arr2)  {
  for(var i =0; i<arr1.length;i++){
    arr2[i] = arr1[i];
  }
}

var nonum1 = [];

for(var i =0; i<10;i++) {
  nonum1[i] = i+1;
}

var samenonum1 =[];

copy(nonum1,samenonum1);

nonum1[0] = 20;
//nonum1[0] != samenonum1[0] ( 20 !=1)
console.log(samenonum1[0]);





 