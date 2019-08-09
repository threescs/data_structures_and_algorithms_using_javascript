// 最高位为n % b, 将此位压入栈
// 使用n/b代替n
// 重复步骤1和2, 直到n等于0, 且没有余数
// 持续将栈内元素弹出, 直到栈为空, 依次将这些元素排列, 就得到转换后数字的字符串形式.

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while(num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

//num传入的数字 base是要转为几进制
var num = 32;
var base = 2;
console.log(mulBase(num, base));