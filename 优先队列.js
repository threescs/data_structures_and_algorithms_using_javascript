// 可以简称为优先级删除
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() { //优先码越小优先级越高, 比如1比5的优先级高
    var entry = 0;
    for(var i = 1; i < this.data.length; ++i) {
        if(this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}
// 最后定义 我toString()方法
function toString() {
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + "code: "
               + this.dataStore[i].code + "\n"; 
    }
    return retStr;
}