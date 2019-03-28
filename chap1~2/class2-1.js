function weekTemps()  {
  this.dataStore = [];
  this.add =add;
  this.average =average;
}

function add(temp)  {
  this.dataStore.push(temp);
}

function average()  {
  var total = 0;

  for(var i =0; i<this.dataStore.length;i++)  {
    total += this.dataStore[i];
  }
  
  return total / this.dataStore.length;
}

var thisWeek = new weekTemps();

thisWeek.add(52);
thisWeek.add(53);
thisWeek.add(62);
thisWeek.add(63);
thisWeek.add(68);
thisWeek.add(74);
thisWeek.add(85);
thisWeek.add(69);
thisWeek.add(79);
thisWeek.add(96);

console.log(thisWeek.average());