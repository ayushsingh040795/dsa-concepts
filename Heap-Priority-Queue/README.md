# Heap & Priority Queue Algorithms

This folder contains JavaScript implementations of classic heap and priority queue problems, each with a meaningful filename and a brief description of the problem it solves.

## What is a Heap / Priority Queue?

A heap is a special tree-based data structure that satisfies the heap property. Priority queues are abstract data types that allow efficient retrieval of the highest (or lowest) priority element.

### Visual Diagram (ASCII)

Min-Heap:
```
      1
     / \
    3   5
   / \  /
  7  9 2
```

### Key Concepts
- Heap property: parent is smaller (min-heap) or larger (max-heap) than children.
- Efficient insert and extract operations.
- Used for sorting, scheduling, and more.

### Basic Pseudocode (Heap Insert)

```
heap = []
insert(val):
    heap.append(val)
    bubble up to maintain heap property
```

### More Visual Resources
- [Heap Explained (YouTube)](https://www.youtube.com/watch?v=t0Cq6tVNRBA)
- [LeetCode Patterns: Heap](https://leetcode.com/explore/learn/card/heap/)

---

Each file contains a problem statement, example, and a working solution.