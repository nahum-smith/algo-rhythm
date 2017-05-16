// The Recursive Method
//-------------------------------------------------------------------
let binary_search_recursive = function(a, key, low, high) {
  // If the low index is greater than the high immediately return -1
  // this if the state that occurs when the key is not found
  if (low > high) {
		return -1
	}
  // find the midpoint index in the array by dividing the difference of
  // the high and low by 2 and rounding it off to get a whole integer.
	let mid = low + Math.floor((high - low) /2)

  // if the midpoint index value is == key then return it
  if (a[mid] == key) {
		return mid
  // if the key is less than the midpoint index value then
  // return: recursively run the function again but changing the
  // high value to the midpoint - 1
	} else if (key < a[mid]) {
		return binary_search_recursive(a, key, low, (mid-1))
  // else (key is greater than midpoint index value)
  // return: recursively run function with the low data value
  // being changed to the midpoint + 1
	} else {
		return binary_search_recursive(a, key, (mid+1), high)
	}
}

// The Iterative Method
//-------------------------------------------------------------------
let binary_search_iterative = function(a, key) {
  // Set low to the index of 0
	let low = 0
  // Set high to the index of the array length - 1
	let high = a.length -1
  // Create a base condition
  // is while the low index is less than or equal to the high
  // keep searching
  let searchAttempts = 1
	while (low <= high) {
    // find the midpoint index in the array by dividing the difference of
    // the high and low by 2 and rounding it off to get a whole integer.
		let mid = low + Math.floor((high - low) /2)
    // if the midpoint index value is == key then return it
		if (a[mid] === key) {
			return mid;
		}
    // if the key is less than the value at the array midpoint index
    if (key < a[mid]) {
      // Redeclare the high as that midpoint index -1
			high = mid - 1;
      // Otherwise redeclare the low as the midpoint index +1
		} else {
			low = mid + 1;
		}
    searchAttempts ++
	}
  // The while loop base case returns false therefore
  // the key was not found
	return -1;
}

let test_array = [1,2,3,4,5,6,7,8,9, 10, 14, 17, 18, 56, 89]

console.log(test_array)
console.log(binary_search_recursive(test_array, 14, 0, test_array.length -1))
console.log(binary_search_iterative(test_array, 14))
