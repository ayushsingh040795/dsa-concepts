# Two-Pointers Algorithms

This folder contains JavaScript implementations of classic two-pointers problems, each with a meaningful filename and a brief description of the problem it solves.

## What is the Two-Pointers Technique?

The two-pointers technique is a powerful method for solving problems involving arrays or strings, where you use two pointers to scan the data from different directions or at different speeds. This approach is commonly used for searching, partitioning, and optimizing subarrays or substrings.

### Visual Diagram (ASCII)

Suppose you have an array:

`[1, 2, 3, 4, 5, 6]`

Two pointers:

```
left --> [1, 2, 3, 4, 5, 6] <-- right
         ^              ^
         |              |
      start          end
```

The pointers move towards each other or in the same direction, depending on the problem.

### Key Concepts
- Use two pointers to represent positions in the array or string.
- Move pointers based on problem constraints (e.g., sum, duplicates).
- Update results as pointers move.

### Basic Pseudocode

```
left = 0
right = n - 1
while left < right:
    // Check condition
    if ...:
        left += 1
    else:
        right -= 1
    // Update result if needed
```

### More Visual Resources
- [Two Pointers Pattern Explained (YouTube)](https://www.youtube.com/watch?v=FzvK5uuaki8)
- [LeetCode Patterns: Two Pointers](https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1177/)

---

Each file contains a problem statement, example, and a working solution.