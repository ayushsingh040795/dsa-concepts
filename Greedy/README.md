# Greedy Algorithms

This folder contains JavaScript implementations of classic greedy problems, each with a meaningful filename and a brief description of the problem it solves.

## What is the Greedy Technique?

Greedy algorithms make the locally optimal choice at each step, hoping to find the global optimum. They are used for problems where choosing the best option at each stage leads to the best overall solution.

### Visual Diagram (ASCII)

Suppose you have coins of denominations:

`[1, 2, 5]` and amount = 11

Greedy choice:
```
Take 5 -> 6 left
Take 5 -> 1 left
Take 1 -> 0 left
```

### Key Concepts
- Make the best choice at each step.
- No backtracking or reconsideration.
- Works for problems with optimal substructure.

### Basic Pseudocode

```
while amount > 0:
    pick largest coin <= amount
    amount -= coin
    // count coins
```

### More Visual Resources
- [Greedy Algorithms Explained (YouTube)](https://www.youtube.com/watch?v=ARf9TLr5hzY)
- [LeetCode Patterns: Greedy](https://leetcode.com/explore/learn/card/greedy/)

---

Each file contains a problem statement, example, and a working solution.