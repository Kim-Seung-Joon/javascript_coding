function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //리스트 요소를 저장한 빈 배열을 초기화 시킴
  this._clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append; // 새 요소를 리스트 끝에 추가
  this.remove = remove;
  this.front = front; // 현재 위치를 리스트의 첫 요소로 선정
  this.end = end; // 현재 위치를 리스트의 마지막 요소로 선정
  this.prev = prev; // 현재 위치를 한 요소 뒤로 이동
  this.next = next;
  this.length = length;
  this.currPos = currPos; // 리스트의 현재 위치를 반환
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}


// 빈 리스트의 배열에 리스트의 크기만큼을 넣는다.
function append(element)  {
  this.dataStore[this.listSize++] = element;
}

function find(element)  {
  for ( var i =0 ; i <this.dataStore.length; i++) {
    if(this.dataStore[i] == element)  {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if(foundAt > -1)  {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }

  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

// 삽입함수

// 요소를 삽입할 위치를 찾으면
// splice를 이용해서 추가시키고
// 리스트의 크기는 1을 증가시켜준다(삽입했으니까);
function insert(element,after) {
  var insertPos = this.find(after);

  if(insertPos > -1)  {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

//클리어 함수
function clear()  {
  // delete로 다 날리고
  delete this.dataStore;

  // 길이와 위치 크기가 0인것으로 초기화
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

// 특정값 유/무 확인
function contains(element)  {
  for(var i = 0; i <this.dataStore.length; i++) {
    if(this.dataStore[i] == element)  {
      return true;
    }
  }
  return false;
}

function front()  {
  this.pos = 0;
}

function end()  {

  //ex) 10짜리 배열이라고 하면
  // 0~9까지 인덱스가 있을 것이고 
  // 10-1 = 9 하면 마지막 인덱스으 위치 확인
  this.pos = this.listSize -1;
}


// 한칸 마이너스
function prev() {
  if(this.pos>0)  {
    --this.pos;
  }
}

// 한칸 플러스
function next() {
  if(this.pos<this.listSize-1)  {
    ++this.pos;
  }
}

// 현재위치
function currPos()  {
  return this.pos;
}


// 그 위치로 이동
function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}


// 리스트 구현 테스트 코드

// 리스트 클래스를 선언하고
var names = new List();

// 빈 리스트에 Alice,Bob,Carl을 추가
names.append("Alice");
names.append("Bob");
names.append("Carl");
names.append("David");
names.append("Elise");
names.append("Froyo");
names.append("Great");

// 현재 리스트안에 어떠한 것들이 들어 있는지 확인
console.log(names.toString());

// Bob제거
// names.remove("Bob");

// Bob제거 하고 남은 요소들 확인
// console.log(names.toString());

// names.front();

// console.log(names.getElement());

// names.next();

// console.log(names.getElement());

// names.next();
// names.next();
// names.prev();

// console.log(names.getElement());


// 리스트 탐색하는 코드
// for(var i =names.front(); i <names.length; i++) {
//   console.log(names.getElement());
// }
