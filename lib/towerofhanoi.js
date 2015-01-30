/*In the classic problem of the Towers of Hanoi, yo have 3 towers and N disks of different sizes which can slide onto any tower. Constraints
1)Only one disk can be moved at a time
2)A disk slid off the top of one tower onto the next tower
3)A disk can only be placed on top of a larger disk
Write a program to move the disks from the first tower to the last stacking units
*/

"use strict";

var Stack = require("./stack.js");

function Tower() {
	var disks = new Stack();
	
	function moveDisks(n, dest, buffer) {
		if(n <= 0) {
			return;
		}

		moveDisks(n-1, buffer, dest);
		
		moveDiskTo(dest);

		buffer.moveDisks(n-1, dest, instance);
	}

	function moveDiskTo(dest) {
		var disk = disks.pop();

		dest.add(disk);
	}

	function add(disk) {
		if(!disks.isEmpty() && disks.peek() <= disk) {
			throw new Error("Invalid disk placement");
		} else {
			disks.push(disk);
		}
	}

	function getDisks() {
		return disks;
	}

	var instance =  {
		moveDisks: moveDisks,
		moveDiskTo: moveDiskTo,
		add: add,
		getDisks: getDisks
	};

	return instance;
}

module.exports = Tower;
