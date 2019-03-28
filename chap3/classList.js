class List{
  constructor(clear,find,toString,insert,append,remove,front,end,prev,next,length,currPos,moveTo,getElement,contains){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this._clear = clear;
    this._find = find;
    this._toString = toString;
    this._insert = insert;
    this._append = append; // 새 요소를 리스트 끝에 추가
    this._remove = remove;
    this._front = front; // 현재 위치를 리스트의 첫 요소로 선정
    this._end = end; // 현재 위치를 리스트의 마지막 요소로 선정
    this._prev = prev; // 현재 위치를 한 요소 뒤로 이동
    this._next = next;
    this._length = length;
    this._currPos = currPos; // 리스트의 현재 위치를 반환
    this._moveTo = moveTo;
    this._getElement = getElement;
    this._length = length;
    this._contains = contains;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  // 리스트의 배열의 길이만큼 돌리고
  // 만약 그 요소에서 값을 찾으면
  // 리스트의 배열의 요소의 위치를 반환
  // 없으면 -1
  find(element) {
    for(var i = 0; i<this.dataStore.length;i++) {
      if(this.dataStore[i] == element)  {
        return i;
      }
    }

    return -1;
  }

  remove(element) {
    var foundAt = this.find(element);
    if(foundAt > -1)  {

    }
  }

  length()  {
    return this.listSize;
  }

  toString()  {
    return this.dataStore;
  }

  //insert함수
  // splice를 이용해서 요소를 추가시키고
  // 그 이후 리스트의 크기도 증가시킨다

  insert(element,after)  {
    // 어디에 넣을껀지 우선 위치부터 찾고
    var insertPos = this.find(after);

    if(insertPos>-1)  {
      this.dataStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;

    this.dataStore.length = 0;
    this.listSize = 0;
  }

  contain(element)  {
    for(var i =0; i <this.dataStore.length; i++){
      if(this.dataStore[i] == element)  {
        return true;
      }
    }

    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize-1;
  }

  prev()  {
    if(this.pos>0)  {
      --this.pos;
    }
  }

  next()  {
    if(this.pos<this.listSize-1)  {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position)  {
    this.pos = position;
  }

  getElement()  {
    return this.dataStore[this.pos];
  }
}

let names = new List();

// 빈 리스트에 Alice,Bob,Carl을 추가
names.append("Alice");
names.append("Bob");
names.append("Carl");
names.append("David");
names.append("Elise");
names.append("Froyo");
names.append("Great");

console.log(names.toString());

