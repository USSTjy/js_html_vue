var leetCode = {
  reverse,
  twoSum,
  removeDuplicates,
  removeElement,
  longestCommonPrefix,
  minNum,
  climbStairs,
};
/** 
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  if (!x) return false;
  if (parseFloat(x).toString() === "NaN") return false;
  if (x > 2 ** 31 - 1) return 0;
  if (x < -(2 ** 31 - 1)) return 0;
  let num = x.toString();
  let data = x.toString().split("");
  if (data.indexOf("-") > -1) {
    data.shift();
  }
  let len = data.length;
  for (let i = 0; i < parseInt(len / 2); i++) {
    [data[i], data[len - i - 1]] = [data[len - i - 1], data[i]];
  }
  let res = "";
  for (let i = 0; i < len; i++) {
    res = res + data[i];
  }
  if (num.indexOf("-") > -1) {
    res = "-" + res;
  }
  if (parseFloat(res) > Math.pow(2, 31) - 1) return 0;
  if (parseFloat(res) < -(Math.pow(2, 31) - 1)) return 0;
  return parseFloat(res);
}

/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let arr = [...nums];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let temp = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (temp + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * 
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let list = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (list.indexOf(nums[i]) === -1) {
      list.push(nums[i]);
    }
  }
  return list.length;
}

function removeElement(nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}
/**编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  var getMinLength = function (strs) {
    let data = [];
    strs.map((item) => {
      data.push(item.length);
    });
    return data;
  };

  var getCount = function (strs1, strs2) {
    let minLen = minNum(getMinLength([strs1, strs2]));
    let index = 0;
    while (index < minLen && strs1.charAt(index) == strs2.charAt(index)) {
      index++;
    }
    return strs1.substring(0, index);
  };
  const n = strs.length;
  if (n === 0 || n > 200) return "";
  let prefix = strs[0];
  for (let i = 1; i < n; i++) {
    prefix = getCount(prefix, strs[i]);
    if (prefix.length === 0) {
      break;
    }
  }
  return prefix;
}

/*数组取最小值
 *
 *
 */
function minNum(arr) {
  let len = arr.length;
  let minNum = arr[0];
  for (let i = 1; i < len; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return minNum;
}

/**假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {}
module.exports = leetCode;
