const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  getUnderlyingList() {
    return this.first;
  }


  // isEmpty() {
  //   return !this.size
  // }

  enqueue(value) {
    const newNode = new ListNode(value)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
  }

  dequeue() {

    //* if our queue is empty we return null 
    if (!this.first) return null
    const itemToBeRemoved = this.first.value

    /**
     * * if both our first and last node are pointing the same item
     * * we dequeued our last node. 
     */
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return itemToBeRemoved
  }

}
