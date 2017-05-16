# 
# Binary Search Algorithm Study
#
# 1) At every step, consider the array between low and high indices
# 2) Calculate the mid index
# 3) if the elemtn at the mid index is the key, return mid
# 4) if the element at the mid index is greater than the key, the reduce the array size such
# 	that high becomes mid-1.  Index at low remains the same.
# 5) if element at mid is less than the key, then reduce the array size such that low becomes mid + 1. index at high remains the same.
# 6) When low is greater than high, key doesn't exist. Return -1.
#


def binary_search_rec(a, key, low, high):
    if low > high:
        return -1

    mid = low + ((high - low) / 2)
    if a[mid] == key:
        return mid
    elif key < a[mid]:
        return binary_search_rec(a, key, low, mid-1)
    else:
        return binary_search_rec(a, key, mid+1, high)

def binary_search_iterative(a, key):
    low = 0
    high = len(a) - 1

    while low <= high:

        mid = low + ((high - low) /2)

        if a[mid] == key:
            return mid

        if key < a[mid]:
            high = mid - 1
        else:
            low = mid + 1
        return -1

def binary_search(a, key):
    return binary_search_rec(a, key, 0, len(a)-1)

test_list = [1,4,2,6,9,87,54,67,34,54,23]
test_list.sort()

assert binary_search([1,2,3,4,5], 4) == 3
print(binary_search(test_list, 67))
print(binary_search_iterative(test_list, 87))
