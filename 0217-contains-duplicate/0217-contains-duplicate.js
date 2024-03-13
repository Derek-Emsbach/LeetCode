/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
// //     Sort nums using .sort()
//     const sortedNums = nums.sort()
//     console.log(sortedNums)
// //     Iterate and see if next number is equal -> return True
//     for (let i = 0; i < sortedNums.length; i++) {
//         if(nums[i] === nums[i + 1]) {
//             return true
//         }
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    let numSet = new Set()
    
    for(let num of nums) {
        if(numSet.has(num)) {
            return true
        }
        numSet.add(num)
    }
    return false
};