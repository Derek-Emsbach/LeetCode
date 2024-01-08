/**
 * @param {number[]} nums
 * @return {string[]}
 */

// const rangeStr = (first, last) => {
//     return `${first}->${last}`
// }

// var summaryRanges = function(nums) {
//     const rangeArr = []
//     let first = nums[0]
//     let last
        
//     for(let i = 0; i < nums.length; i++) {
//         const isEnd = i === nums.length - 1
//         const nextNum = nums[i + 1];
//         const num = nums[i];
        
//         if(isEnd || nextNum !== num + 1) {
//             last = num
            
//             if(first === last) {
//                 rangeArr.push(first.toString())
//             } else {
//                 rangeArr.push(rangeStr(first, last))
//             }
            
//             if(isEnd) break;
            
//             first = nextNum
//         }
//     }
//     return rangeArr
// };

// attempt at lower memory
var summaryRanges = function(nums) {
    const rangeArr = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];
        let end = start;

        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            end = nums[i + 1];
            i++;
        }

        if (start === end) {
            rangeArr.push(start.toString());
        } else {
            rangeArr.push(`${start}->${end}`);
        }

        i++;
    }

    return rangeArr;
};