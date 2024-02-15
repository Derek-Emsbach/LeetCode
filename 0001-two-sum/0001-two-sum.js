/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Using a Map to store indices of seen numbers
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Finding the complement needed to reach target
        if (numMap.has(complement)) { // If complement is already in the map, we've found the solution
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i); // Storing the current number and its index in the map
    }
    
    return []; // If no solution is found, return an empty array
};
