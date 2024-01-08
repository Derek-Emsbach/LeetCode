/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomFreq = new Map()
    const magazineFreq = new Map()
    
//     constructing the magazine map
    for (let char of magazine) {
        magazineFreq.set(char, (magazineFreq.get(char) || 0) + 1)
    }
    
//     checks if ransom note can be made from magazine
    for (let char of ransomNote) {
        if(!magazineFreq.get(char) || magazineFreq.get(char) === 0) {
            return false
        }
        magazineFreq.set(char, magazineFreq.get(char) - 1)
    }
    
    return true
};