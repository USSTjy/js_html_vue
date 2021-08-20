// 排序
var sort = require('./js/sort.js');
// 链表
var link = require('./js/link.js');
const { MinStack } = require('./js/leetcode_stack');
const { nextGreaterElement } = require('./js/leetcode');
const { isValidBST } = require('./js/leetcode_tree');

var minStck = new MinStack();
minStck.push(-2);
minStck.push(0);
minStck.push(-3);
minStck.pop();

// console.log('requl', nextGreaterElement([2, 4], [1, 2, 3, 4]));

// console.log('dtreeee=====', isValidBST([2, 1, 3]));
