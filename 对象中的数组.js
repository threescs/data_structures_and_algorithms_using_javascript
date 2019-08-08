function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add (temp) {
    this.dataStore.push(temp)
}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(52);
thisWeek.add(52);
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(52);
thisWeek.add(52);
// console.log(thisWeek.average());

//将一组单词储存在一个数组中, 并按正序或者倒序现实这些单词
var mans = ['gg', 'aa', 'yy'];
console.log(mans.sort());
