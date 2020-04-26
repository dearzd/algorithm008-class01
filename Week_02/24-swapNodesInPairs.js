/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let prevNode = null;
    let currentNode = head;
    let nextHead = head.next;
    while (currentNode && currentNode.next) {
        let nextNode = currentNode.next;
        //do swap
        if (prevNode) {
            prevNode.next = nextNode;
        }
        currentNode.next = nextNode.next;
        nextNode.next = currentNode;
        prevNode = currentNode;
        currentNode = prevNode.next;
    }
    return nextHead;
};
