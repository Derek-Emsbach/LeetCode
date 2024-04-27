/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {};
    
    // Iterate through each string in the array
    for (const str of strs) {
        // Sort the characters of the string to get its signature
        const sortedStr = str.split('').sort().join('');
        
        // If the signature already exists in the object, push the string to its array
        if (anagrams[sortedStr]) {
            anagrams[sortedStr].push(str);
        } else {
            // If the signature doesn't exist, create a new entry with the sorted string as key
            anagrams[sortedStr] = [str];
        }
    }
    
    // Convert the object values (arrays of anagrams) to an array and return
    return Object.values(anagrams);
};