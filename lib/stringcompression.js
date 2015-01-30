"use strict";
//Implement a method to perform basic string compression using the count of repeated characters".

function compressStr(str) {
	var strLen			= str.length,
		newCharArr		= [],
		newCharArrLen	= 0,
		prevChar,
		prevCharCount,
		index,
		c;

	for(index = 0; index < strLen; index++) {
		c = str.charAt(index);
		if(c != prevChar) {
			prevChar = c;
			prevCharCount = 1;
			newCharArrLen += 2;
			newCharArr[newCharArrLen - 1] = prevCharCount;
			newCharArr[newCharArrLen - 2] = prevChar;
		} else {
			prevCharCount++;
			newCharArr[newCharArrLen - 1] = prevCharCount;
		}
	}

	if(newCharArr.length > strLen) {
		return str;
	} else {
		return newCharArr.join("");
	}

}

module.exports = compressStr;
