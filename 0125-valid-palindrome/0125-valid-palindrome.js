/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowerCase = s.toLowerCase()
    const newString = lowerCase.replace(/[^a-zA-Z0-9]/g, '')
    const reverse = newString.split('').reverse().join('')
    
    if(newString === reverse) {
        return true
    } else {
        return false
    }
    
};