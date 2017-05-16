# Binary Search

### Description

Given the sorted array of integers, return the index of the given key.  Return -1 if not found.  

This algorithm should divide the input array by half in every step, therefore the time is takes is O(logn).

The steps include:
1. At every step, consider the array between low and high indices
2. Calculate the mid index.
3. If element at the mid index is the key, return mid.
4. If element at mid is greater than the key, then reduce the array size such that high becomes mid - 1. Index at low remains the same.
5. If element at mid is less than the key, then reduce the array size such that low becomes mid + 1. Index at high remains the same.
6. When low is greater than high, key doesn't exist. Return -1.
