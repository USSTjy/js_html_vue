/**
 * 排序算法
 *
 * 常用于Js中对数据进行排序，特别是在数据管理的时候
 */

/**
 * 冒泡排序
 *
 * 冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，
 * 一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行
 * 直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的
 * 元素会经由交换慢慢"浮"到数列的顶端。
 *
 * 可以参考：https://www.runoob.com/w3cnote/bubble-sort.html
 */
function bubbleSort(src) {
  let arr = [...src];

  let len = arr.length;
  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j <= len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/**
 * 插入排序
 *
 * 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易
 * 理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 *
 * 可以参考：https://www.runoob.com/w3cnote/insertion-sort.html
 */
function insertionSort(src) {
  let arr = [...src];
  let len = arr.length;
  let index, cnt;
  for (let i = 1; i < len; i++) {
    index = i - 1;
    cnt = arr[i];
    while (index >= 0 && arr[index] > cnt) {
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = cnt;
  }
  return arr;
}
// 选择排序
function selectSort(src) {
  let arr = [...src];
  var len = arr.length;
  var minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 指针找最小数并且保存
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp; //交换位置
  }
  return arr;
}
var sort = {
  bubbleSort,
  insertionSort,
  selectSort,
};
// module.exports.bubbleSort = bubbleSort;
// module.exports.insertionSort = insertionSort;
// module.exports.selectSort = selectSort;
module.exports = sort;
