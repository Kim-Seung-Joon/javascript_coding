class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  // displayPts(arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     return console.log(arr[i].x + " , " + arr[i].y);
  // }
    
  // }
  // displayPts()  {
  //   return `x = ${this.x} , y = ${this.y}`
  // }
}




var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];

// console.log(points);


for(var i =0; i <points.length;i++){
  console.log("Point "+parseInt(i+1)+": "+points[i].x+", "+points[i].y);
}


// 배열 points에는 p1,p2,p3,p4 4개의 값만이 들어 있었는데
// 추가로 p5가 들어가게 된다.!!
var p5 = new Point(12,-3);
points.push(p5);

console.log(points.displayPts())

// console.log(points.displayPts(points));

for(var i =0; i<points.length; i++){
  console.log("after push :"+points[i].x+" , "+points[i].y)
}
points.shift();

for (var i = 0; i < points.length; i++) {
  console.log("after shift :" + points[i].x + " , " + points[i].y)
}