/*Implement an alogorithm to print all valid (e.g. properly opened and closed) combinations or pairs of parentheses.
Example:
	Input: 3
	Output: ((())), (()()), (())(), ()(()), ()()()
*/

"use strict";

function getParentheses(count) {
	var resultList = [];
	addParen(resultList, count, count, [], 0);
	return resultList;
}

function addParen(rList, leftRem, rightRem, strArr, count) {
	if(leftRem < 0 || rightRem < 0) {
		return;
	}

	if(leftRem === 0 && rightRem === 0) {
		rList.push(strArr.join(""));
	} else {
		if(leftRem > 0 ){
			strArr[count] = "(";
			addParen(rList, leftRem - 1, rightRem, strArr, count + 1);
		}

		if(rightRem > leftRem) {
			strArr[count] = ")";
			addParen(rList, leftRem, rightRem - 1, strArr, count + 1);
		}
	}
}

module.exports = getParentheses;
