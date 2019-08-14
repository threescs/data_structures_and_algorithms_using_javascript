function distribute (nums, queues, n, digit) { //digit表示个位或者十位上的值
    for(var i = 0; i < n; ++i) {
        if(digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for(var digit = 0; digit < 10; ++digit) {
        while(!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for(var i = 0; i < arr.length; ++i) {
        putstr(arr[i] + '');
    }
}

//主程序
var queues = [];
for(var i = 0; i < 10; ++i) {
    queues[i] = new queues();
}
var nums = [];
for(var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
