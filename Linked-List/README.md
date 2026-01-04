# Linked List Algorithms

This folder contains JavaScript implementations of classic linked list problems, each with a meaningful filename and a brief description of the problem it solves.

## What is a Linked List?

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node. Linked lists are useful for dynamic memory allocation and efficient insertions/deletions.

### Visual Diagram (ASCII)

```
[1] -> [2] -> [3] -> [4] -> null
```

### Key Concepts
- Each node contains data and a pointer to the next node.
- Operations include traversal, insertion, deletion, and reversal.

### Basic Pseudocode (Reversal)

```
prev = null
curr = head
while curr:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
return prev
```

### More Visual Resources
- [Linked List Explained (YouTube)](https://www.youtube.com/watch?v=njTh_OwMljA)
- [LeetCode Patterns: Linked List](https://leetcode.com/explore/learn/card/linked-list/)

---

Each file contains a problem statement, example, and a working solution.