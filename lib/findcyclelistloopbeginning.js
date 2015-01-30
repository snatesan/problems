/*Given a circular linked list implement an algorithm which returns the node at the beginning of loop
Example
Input: A -> B -> C -> D -> E -> C
Output: C */

function getBeginningOfLoop(head) {
	var fast = head,
		slow = head;

	while(fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast) {
			break;
		}
	}

	slow = head;

	while(fast && slow != fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return fast;
}

module.exports = getBeginningOfLoop;
