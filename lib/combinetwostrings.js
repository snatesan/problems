"use strict";
/*We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string. For example, given str1=”abc” and str2=”def”, str3=”dabecf” is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2. - See more at: http://www.ardendertat.com/2012/01/09/programming-interview-questions/#sthash.oVkqXXAW.dpuf*/

function verifyCombinationString(str1, str2, str3) {
	if(!str3 || !str2 || !str1) {
		return false;
	}

	var arrStr1 = str1.split(""),
		arrStr2 = str2.split(""),
		arrStr3 = str3.split(""),
		str1Len = arrStr1.length,
		str2Len = arrStr2.length,
		str3Len = arrStr3.length;

	if(str3Len !== (str1Len + str2Len)) {
		return false;
	}

	for(var index = 0, src1Index = 0, src2Index = 0; index < str3Len; ) {
		var c = arrStr3[index],
			nextC;

		if(src1Index < str1Len) {
			if(src2Index < str2Len) {
				nextC = arrStr3[index + 1];
				if((c == arrStr1[src1Index] && nextC == arrStr2[src2Index]) || (c == arrStr2[src2Index] && nextC == arrStr1[src1Index])) {
					index += 2;
					src1Index++;
					src2Index++;
				} else {
					return false;
				}
			} else if(c == arrStr1[src1Index]) {
				index++;
				src1Index++;
			} else {
				return false;
			}
		} else if(src2Index < str2Len) {
			if(c == arrStr2[src2Index]) {
				index++;
				src2Index++;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}
	
module.exports = verifyCombinationString;
