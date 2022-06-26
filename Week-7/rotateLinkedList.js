// Given a linked list of N nodes. The task is to reverse this list.
// Example 1:
// Input:
// LinkedList: 1->2->3->4->5->6
// Output: 6 5 4 3 2 1
// Explanation: After reversing the list,elements are 6->5->4->3->2->1.

function rotateLinkedListKTimes(head, k){
    let tail = head, n = 1;

    while(tail.next){
        n++;
        tail = tail.next;
    }

    k%=n;
    if(k === 0){
        return head;
    }
    tail.next = head;
    let steps = n - k;
    let newTail = tail;
    while(steps--){
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
}

//Time complexity: O(n^2)
//Space complexity: O(1)