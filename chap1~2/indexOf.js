var names = ["왕건","궁예","견훤","신라","고려"];

var name = "왕건"

var position = names.indexOf(name);

if(position>=0){
  console.log("찾은 값은 : "+name+"위치는 :"+position);
}
else{
  console.log("값을 찾지 못했습니다.!!");
}

console.log(names.toString());