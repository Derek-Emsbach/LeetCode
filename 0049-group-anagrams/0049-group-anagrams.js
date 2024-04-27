/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map();
    
    // Iterate through each string in the array
    for (const str of strs) {
        // Sort the characters of the string to get its signature
        const sortedStr = str.split('').sort().join('');
        
        // If the signature already exists in the map, push the string to its array
        if (anagrams.has(sortedStr)) {
            anagrams.get(sortedStr).push(str);
        } else {
            // If the signature doesn't exist, create a new entry with the sorted string as key
            anagrams.set(sortedStr, [str]);
        }
    }
    
    // Convert the map values (arrays of anagrams) to an array and return
    return Array.from(anagrams.values());
};