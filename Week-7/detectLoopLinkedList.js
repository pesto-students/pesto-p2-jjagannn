function detectLoopInLinkedList(head){
    //using slow(+1) and fast(+2) pointer approach
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next;
        if(fast !== null){
            fast = fast.next;
        }
        if(fast === slow){
            //restarting fast with +1 speed towards second meeting with slow
            fast = head;
            while(fast !== slow){
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    return null;
}

// Time complexity: O(n)
// Space complexity: O(1)