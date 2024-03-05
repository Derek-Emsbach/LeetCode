/**
 * @param {string} s
 * @return {number}
 */

const romanNumerals = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

// var romanToInt = function(s) {
//     const numerals = s.split('')
//     let numericValue = 0
//     console.log(numerals)
    
//     for(let i=0; i < numerals.length; i++) {
//         let current = numerals[i]
//         let next = numerals[i + 1]
//         console.log(current, "current")
//         console.log(next, "next")
//         for (const numeral in romanNumerals) {
//             if(numeral === current) {
//                 current = romanNumerals[numeral]
//             }
//             if(numeral === next) {
//                 next = romanNumerals[numeral]
//             }
//         }
        
//         if(next>current) {
//             const currentSum = next - current
//             numericValue = currentSum + numericValue
//         } else {
//             numericValue = current + numericValue
//         }
            
            
//         }
//     return numericValue
//     }
    
var romanToInt = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanNumerals[s[i]];
        let next = romanNumerals[s[i + 1]];
        if (next && current < next) {
            total += next - current;
            i++; // Skip the next character as it's already processed
        } else {
            total += current;
        }
    }
    return total;
}