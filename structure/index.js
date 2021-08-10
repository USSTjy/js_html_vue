// 排序
var sort = require('./js/sort.js');
// 链表
var link = require('./js/link.js');

const { MinStack } = require('./js/leetcode_stack');
const { nextGreaterElement } = require('./js/leetcode');

var minStck = new MinStack();
minStck.push(-2);
minStck.push(0);
minStck.push(-3);
console.log('dddd', minStck.getMin());

minStck.pop();
console.log('dddd', minStck.top());
console.log('dddd', minStck.getMin());

console.log('requl', nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log('global', this);
