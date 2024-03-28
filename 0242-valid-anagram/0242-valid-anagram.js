/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const anagramInput = s.split('')
    const anagramOutput = t.split('')
    
    if(anagramInput.length !== anagramOutput.length) {
        return false
    }
    
    const anagramMap = new Map();
    
    for (letter of anagramInput) {
        if(anagramMap.has(letter)) {
            anagramMap.set(letter, anagramMap.get(letter) + 1)
        } else {
            anagramMap.set(letter, 1)
        }
        
    }
    
    for (letter of anagramOutput) {
        if(!anagramMap.has(letter) || anagramMap.get(letter) === 0) {
            return false
        } 
        else {
            anagramMap.set(letter, anagramMap.get(letter) - 1)
        }
    }
    
    return true
};