var leetcode_stack = {
	MinStack,
};

function MinStack() {
	this.data = [];
	this.length = 0;
	this.min = [];
}
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.data.push(val);
	if (this.length === 0) {
		this.min.push(val);
	} else {
		let lenData = this.min[this.length - 1];
		if (val < lenData) {
			this.min.push(val);
		} else {
			this.min.push(lenData);
		}
	}
	this.length++;

	return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.length === 0) return;
	this.data.pop();
	this.min.pop();
	this.length--;
	return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.data[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min[this.length - 1];
};

module.exports = leetcode_stack;
