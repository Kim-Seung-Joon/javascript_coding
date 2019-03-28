var num1 = [1,2,3,4];
var num2 = [4,5,6,7];


// push
console.log(num1.push(5));
console.log(num1);


// pop
console.log(num2.pop());
console.log(num2);


// splice(startindex,0(0이면 값을 푸쉬),넣고자 하는 값)
// splice(startindex,개수) = 시작위치에서 그 갯수만큼 삭제한다.!!
var nums = [1,2,3,4,5]
var newnum = [6,7,8];

nums.splice(5,0,newnum);
console.log(nums);