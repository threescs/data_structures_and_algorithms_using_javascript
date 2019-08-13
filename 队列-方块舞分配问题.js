// 每个舞者信息都存储在一个Dancer对象中

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = read('舞者们.txt').split('\n');
    for( var i = o; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for( var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

// 下个函数将男性和女性组成舞伴, 并且宣布配对结果,
function dance(males, females) {
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        person = males.dequeue();
    }
}

// 模拟方块舞
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return dataStore[0];
}
function back() {
   return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = '';
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if(this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}
function getDancers(males, females) {
    var names = read('舞者们.txt').split('\n');
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for(var i = 0; i < namas.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex == "F") {
            femaleDancers.enqueue(new Dancer(name, sex));
        }
        else {
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        person = males.dequeue();
    }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + 'is waiting to dance');
}
if(!maleDancers.empty()) {
    console.log(maleDancers.front().name + 'is waiting to dance');
}