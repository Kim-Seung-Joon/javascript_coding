let weekTemps = 
class {
  constructor(add,average,dataStore)  {
    this.dataStore = [];
    this._add = add;
    this._average = average;
  }

  add(temp) {
    this.dataStore.push(temp);
  }

  average() {
    var total =0;
    for(var i =0; i<this.dataStore.length;i++)  {
      total += this.dataStore[i];
    }
    return total/this.dataStore.length;
  }
}

var week = new weekTemps();

week.add(52);
week.add(55);
week.add(61);
week.add(65);
week.add(55);
week.add(50);
week.add(52);
week.add(49);

console.log(week.average());