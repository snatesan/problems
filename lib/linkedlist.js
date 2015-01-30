"use strict";

function List() {
	var head,
		tail;

	this.add = function(d) {
		var node = new Node(d);
		if(!head) {
			head = node;
			tail =node;
		} else {
			tail.next = node;
			tail = node;
		}

		return node;
	};

	this.firstNode = function() {
		return head;
	};

	//remove all the nodes with that specific value;
	this.remove = function(val) {
		var next = head,
			node,
			isRemoved = false;

		while(next) {
			if(next.data == val) {
				if(next == tail) {
					tail = node;
				}
				if(next == head) {
					head = next.next;
				}
				
				next = next.next;

				if(node) {
					node.next = next;
				}

				isRemoved = true;
			} else {
				node = next;
				next = next.next;
			}
		}

		return isRemoved;

	};

	this.removeFirstNode = function() {
		if(!head) {
			return;
		}
		if(head == tail) {
			tail = tail.next;
		}
		var node = head;
		head = head.next;

		return node;
	};

	/*this.toString = function() {
		var slow, fast,
			str = "";

		if(head) {
			slow = head;
			fast = head.next;
			
			while(true) {
				str += slow.data + " -> ";
				if(!fast || !fast.next) {
					while(slow = slow.next) {
						str += slow.data + " - > ";
					}
					return str;
				}else if(fast == slow || fast.next == slow) {
					var current = slow;
					slow = slow.next;
					while(current != slow) {
						str += slow.data + " - > ";
						slow = slow.next;
					}
					str += current.data;
					return str;
				} else {
					slow = slow.next;
					fast = fast.next.next;
				}
			}
		}

		return str;
	};*/
}
			
function Node(d) {
	this.data = d;
	this.next = null;
}

module.exports = List;


