Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for(var i = 0; i < numrows; ++i) {
        var colums = [];
        for (var j = 0; j < numcols; ++j) {
            colums[j] = initial; 
        }
        arr[j] = colums;
    }
    return arr;
}

var nums = Array.matrix(5, 5, 0);
// console.log(nums);
var names = Array.matrix(3,3,'');
// names[1][2] = "Joe";
console.log(names);

// var grades = [[89, 77, 78],[76, 82, 81], [91,94,89]];
// console.log(grades[2][2]);

// 计算每个二维数组内的每个人的平均成绩; 数组内每个数组代表每个人各科成绩
// var grades = [[89, 77, 78],[76, 82, 81], [91,94,89]];
// 这里分成行列 可以这样认为
// var grades = [[89, 77, 78],
//              [76, 82, 81], 
//              [91,94,89]]
// var total = 0;
// var average = 0.0;
// for (var row = 0; row < grades.length; ++row) {
//     for( var col = 0; col < grades[row].length; ++col) {
//         total += grades[row][col];
//     } 
//     average = total / grades[row].length;
//     console.log("Student" + parseInt(row + 1) + "average: " + average.toFixed(2));
//     total = 0;
//     average = 0.0;
// }
// 下面计算各科的平均成绩
var grades = [[89, 77, 78],
             [76, 82, 81], 
             [91,94,89]]
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
    for( var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    } 
    average = total / grades[col].length;
    console.log("Student" + parseInt(col + 1) + "average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}