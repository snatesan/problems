"use strict";
//Implement an algorithm to determine if a string has all unique charactes.

function isUnique(str) {

	if(!str) {
		return false;
	}

	var limitSize	= 23,
		r1ll		= 32,
		r1ul		= r1ll + 23,
		r2ll		= r1ul + 1,
		r2ul		= r2ll + 23,
		r3ll		= r2ul + 1,
		r3ul		= r3ll + 23,
		r4ll		= r3ul + 1,
		r4ul		= 126,
		checker1	= 0,
		checker2	= 0,
		checker3	= 0,
		checker4	= 0,
		len			= str.length,
		index		= 0,
		shift,
		charCode;

	for(; index < len; index++) {
		charCode = str.charCodeAt(index);

		if(charCode >= r1ll && charCode <= r1ul) {
			shift = 1 << (charCode - r1ll);
			if(checker1 & shift) {
				return false;
			} else {
				checker1 |= shift;
			}
		} else if(charCode >= r2ll && charCode <= r2ul) {
			shift = 1 << (charCode - r2ll);
			if(checker2 & shift) {
				return false;
			} else {
				checker2 |= shift;
			}
		} else if(charCode >= r3ll && charCode <= r3ul) {
			shift = 1 << (charCode - r3ll);
			if(checker3 & shift) {
				return false;
			} else {
				checker3 |= shift;
			}
		} else if(charCode >= r4ll && charCode <= r4ul) {
			shift = 1 << (charCode - r4ll);
			if(checker4 & shift) {
				return false;
			} else {
				checker4 |= shift;
			}
		}
	}

	return true;
}

module.exports = isUnique;
