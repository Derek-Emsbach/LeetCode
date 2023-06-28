/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let nCopy = n;
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[nCopy - 1];
        while (nCopy < 0) {
            return;
        }
        nCopy--;
    }
    nums1.sort((a, b) => a - b);
};
    