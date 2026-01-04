
# Sliding Window Algorithms

## What is the Sliding Window Technique?

The sliding window technique is a powerful method for solving problems involving arrays or strings, where you need to examine a contiguous block (window) of elements. Instead of using nested loops to check every possible subarray or substring, you "slide" a window over the data, updating the result efficiently as you go.

### Key Concepts
- Use two pointers (start and end) to represent the current window.
- Expand the window by moving the end pointer.
- Shrink the window by moving the start pointer as needed (to maintain constraints).
- Update results (sum, max, count, etc.) as the window moves.

### Basic Pseudocode

For a fixed-size window:

```
start = 0
for end in 0 to n-1:
	// Add arr[end] to window
	if window size > K:
		// Remove arr[start] from window
		start += 1
	// Update result if needed
```

For a variable-size window (e.g., with constraints):

```
start = 0
for end in 0 to n-1:
	// Add arr[end] to window
	while window does not satisfy constraints:
		// Remove arr[start] from window
		start += 1
	// Update result if needed
```

This folder contains JavaScript implementations of classic sliding window problems, each with a meaningful filename and a brief description of the problem it solves.

## File List & Descriptions

- **average-of-subarrays-size-k.js**: Calculates the average of all contiguous subarrays of size K.
- **contains-permutation-of-pattern.js**: Checks if a string contains any substring that is a permutation of a given pattern.
- **count-anagram-substrings.js**: Counts how many substrings of the string are anagrams of the pattern.
- **count-subarrays-of-size-k.js**: Counts contiguous subarrays of size K.
- **longest-ones-after-replacement.js**: Finds the longest subarray of 1s after replacing at most K zeros.
- **longest-same-letter-substring-after-replacement.js**: Finds the longest substring that can be transformed into a string with all identical characters after at most K replacements.
- **longest-subarray-absolute-diff.js**: Finds the length of the longest contiguous subarray such that the absolute difference between any two elements is within a limit.
- **longest-substring-with-k-distinct.js**: Finds the longest substring with at most K distinct characters.
- **longest-substring-without-repeating.js**: Finds the length of the longest substring without repeating characters.
- **max-fruits-in-two-baskets.js**: Returns the maximum number of fruits you can collect from at most two types of fruit trees in a row.
- **max-sum-distinct-subarray-size-k.js**: Finds the maximum sum of any contiguous subarray of size K with all distinct elements.
- **max-sum-subarray-size-k.js**: Finds the maximum sum of any contiguous subarray of size K.
- **minimum-window-substring.js**: Finds the smallest substring in S that contains all characters of T.
- **shortest-subarray-with-sum-at-least-k.js**: Returns the length of the shortest non-empty contiguous subarray whose sum is at least K.
- **sliding-window-maximum.js**: Returns an array containing the maximum value from every contiguous subarray of size K.
- **smallest-subarray-with-sum-at-least-s.js**: Finds the length of the smallest subarray with sum ≥ S.
- **subarrays-with-product-less-than-k.js**: Returns the number of contiguous subarrays whose product is strictly less than K.

---

Each file contains a problem statement, example, and a working solution.
