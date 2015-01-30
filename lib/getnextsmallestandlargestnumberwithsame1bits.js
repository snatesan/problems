/*Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation*/

"use strict";

function getNextBitsway(num) {
	var	c0 = 0,
		c1 = 0,
		pos,
		mask,
		n = num;
	
	//get trailing zero count
	while( ((n & 1) === 0) && (n !== 0) ) {
		c0++;
		n = n >> 1;
	}

	//get ones count after trailing zeros
	while((n & 1) == 1) {
		c1++;
		n = n >> 1;
	}

	pos = c0 + c1;

	if(pos >= 31 || pos === 0) {
		return -1;
	}

	//set 1 at pos
	mask = 1 << pos;
	num = num | mask;

	//clear all the bits after pos
	mask = ~(mask - 1);
	num = num & mask;

	//set c1-1 trailing ones
	mask = (1 << (c1 - 1)) - 1;
	num = num | mask;

	return num;
}

function getPrevBitsway(num) {
	var c1 = 0,
		c0 = 0,
		pos,
		mask,
		n = num;

	//get trailing one count
	while((n & 1) == 1) {
		c1++;
		n = n >> 1;
	}

	if(n === 0) {
		return -1;
	}

	//get zeros count after trailing ones
	while( ((n & 1) === 0) && (n !== 0) ) {
		c0++;
		n = n >> 1;
	}

	pos = c1 + c0;
	
	if(pos === 0) {
		return -1;
	}
		
	//set pos bit to 0;
	mask = ~(1 << pos);
	num = num & mask;

	//set all the bits after pos to 0 to 1;
	mask = (1 << pos) - 1;
	num = num | mask;

	//set c0-1 trailing zeroes
	mask = ~( (1 << (c0-1)) - 1);
	num = num & mask;

	return num;
}

function getNextArith(num) {
	var	c0 = 0,
		c1 = 0,
		pos,
		mask,
		n = num;
	
	//get trailing zero count
	while( ((n & 1) === 0) && (n !== 0) ) {
		c0++;
		n = n >> 1;
	}

	//get ones count after trailing zeros
	while((n & 1) == 1) {
		c1++;
		n = n >> 1;
	}

	pos = c0 + c1;

	if(pos >= 31 || pos === 0) {
		return -1;
	}

	//make trailing zeroes to one
	num = num + ((1 << c0) - 1); // num + Math.pow(2, c0) - 1;

	//set pos to 0 and all clear all the bits after pos to 0
	num = num + 1;

	//set c1-1 trailing ones
	num = num + ((1 << (c1 - 1)) - 1); // num + Math.pow(2, c1-1) - 1;

	return num;
}

function getPrevArith(num) {
	var c1 = 0,
		c0 = 0,
		pos,
		mask,
		n = num;

	//get trailing one count
	while((n & 1) == 1) {
		c1++;
		n = n >> 1;
	}

	//get zeros count after trailing ones
	while( ((n & 1) === 0) && (n !== 0) ) {
		c0++;
		n = n >> 1;
	}

	pos = c1 + c0;
		
	if(pos >= 31 || pos === 0) {
		return -1;
	}

	//make trailing ones to zeroes
	num = num - ( ( 1 << c1) - 1); // num - Math.pow(2, c1) + 1;

	//set pos bit to zero and trailing zeroes to one
	num = num - 1;

	//set c0-1 trailing zeroes
	num = num - ( ( 1 << (c0 -1) ) - 1); // num - Math.pow(1, c0 - 1) + 1;

	return num;
}

function getNextPrevBitsway(num) {
	if(!num || num <= 0) {
		throw Error("Not supported");
	}

	return {
		next: getNextBitsway(num),
		prev: getPrevBitsway(num)
	};
}

function getNextPrevArith(num) {
	if(!num || num <= 0) {
		throw Error("Not Supported");
	}

	return {
		next: getNextArith(num),
		prev: getPrevArith(num)
	};
}

module.exports = {
	getNextPrevBitsway: getNextPrevBitsway,
	getNextPrevArith: getNextPrevArith
};





	
