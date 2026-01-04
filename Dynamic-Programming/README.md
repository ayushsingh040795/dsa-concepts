# Dynamic Programming Algorithms

This folder contains JavaScript implementations of classic dynamic programming problems, each with a meaningful filename and a brief description of the problem it solves.

## What is Dynamic Programming?

Dynamic programming (DP) is a technique for solving problems by breaking them down into simpler subproblems and storing the results to avoid redundant computation. DP is used for optimization problems and those with overlapping subproblems.

### Visual Diagram (ASCII)

```
Optimal substructure:

fib(n) = fib(n-1) + fib(n-2)

Memoization table:
[0, 1, 1, 2, 3, 5, 8, ...]
```

### Key Concepts
- Break problems into subproblems.
- Store results (memoization/tabulation).
- Build up solutions from base cases.

### Basic Pseudocode (Memoization)

```
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
```

### More Visual Resources
- [Dynamic Programming Explained (YouTube)](https://www.youtube.com/watch?v=OQ5jsbhAv_M)
- [LeetCode Patterns: Dynamic Programming](https://leetcode.com/explore/learn/card/dynamic-programming/)

---

Each file contains a problem statement, example, and a working solution.