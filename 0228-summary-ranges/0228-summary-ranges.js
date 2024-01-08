/**
 * @param {number[]} nums
 * @return {string[]}
 */

const rangeStr = (first, last) => {
    return `${first}->${last}`
}

var summaryRanges = function(nums) {
    const rangeArr = []
    let first = nums[0]
    let last
        
    for(let i = 0; i < nums.length; i++) {
        const isEnd = i === nums.length - 1
        const nextNum = nums[i + 1];
        const num = nums[i];
        
        if(isEnd || nextNum !== num + 1) {
            last = num
            
            if(first === last) {
                rangeArr.push(first.toString())
            } else {
                rangeArr.push(rangeStr(first, last))
            }
            
            if(isEnd) break;
            
            first = nextNum
        }
    }
    return rangeArr
};