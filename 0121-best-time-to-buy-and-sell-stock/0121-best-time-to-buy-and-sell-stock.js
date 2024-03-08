/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     iterate to find smallest integer and store number as min
//     Continue loop to find highest number after smallest index and store as max
//     return max - min
    let min = Infinity
    let maxProfit = 0
    
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
   
    return maxProfit
};