# Binary Search Algorithms

This folder contains JavaScript implementations of classic binary search problems, each with a meaningful filename and a brief description of the problem it solves.

## What is the Binary Search Technique?

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half, checking the middle element, and narrowing the search space.

### Visual Diagram (ASCII)

Suppose you have a sorted array:

`[1, 3, 5, 7, 9, 11, 13]`

```
left --> [1, 3, 5, 7, 9, 11, 13] <-- right
                ^
              mid
```

The search space is halved each time.

### Key Concepts
- Use left, right, and mid pointers.
- Compare target with mid element.
- Narrow search space based on comparison.

### Basic Pseudocode

```
left = 0
right = n - 1
while left <= right:
    mid = left + (right - left) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1
```

### More Visual Resources
- [Binary Search Explained (YouTube)](https://www.youtube.com/watch?v=Q9qDwHth0Pw)
- [LeetCode Patterns: Binary Search](https://leetcode.com/explore/learn/card/binary-search/)

---

Each file contains a problem statement, example, and a working solution.