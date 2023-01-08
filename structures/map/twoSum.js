// LeetCode
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: (nums = [3, 2, 4]), (target = 6);
// Output: [1, 2];


//Naive realization
//Time complexity: O(n2) - the worse case, 'cause we have the nested loop
//Space complexity: O(1)
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 2; i++) {
    for (j = i; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [];
};

//Map realization
//Time complexity: O(n) - worse case, there are no pairs (fetching items from a map is O(1))
//Space complexity: O(n) - we are using map to store the pairs

var twoSum = function (nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};