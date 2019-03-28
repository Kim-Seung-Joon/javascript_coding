

var grades = [[89,88,87],[12,24,36],[9,18,27]];
var total = 0;

var average = 0.0;

// for(var row = 0; row<grades.length;row++){
//   for(var col = 0; col<grades[row].length;col++){
//     total += grades[row][col];
//   }
//   average = total/grades[row].length;
//   console.log("Student : "+parseInt(row+1)+"Average : "+average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }

// 행과 열의 개수가 다른 이차원 배열도 알아서 계산이 가능하다
var grades2 = [[12,24],[8,16,24],[5,10,15,20]];
var total1 = 0;
var average1 = 0.0;

for(var i = 0; i<grades2.length;i++){
  for(var j =0; j<grades2[i].length;j++){
    total1 +=grades2[i][j];
  }
  average1 = total1/grades2[i].length;
  console.log("Student : "+parseInt(i+1)+"Average : "+average1.toFixed(2));
  total = 0;
  average = 0.0;
}