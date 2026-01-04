/*Maximum Number of Ones After Replacement
Problem:
Find the longest subarray of 1s after replacing at most K zeros.
Input:
[0, 1, 1, 0, 0, 1, 1], K = 2
Output:
6 

The problem asks you to find the length of the longest contiguous subarray containing only 1s in a binary array, where you are allowed to replace at most K zeros with ones. In other words, you can flip up to K zeros to ones, and you need to determine the maximum possible length of a subarray that consists entirely of 1s after these replacements.

For example, with input [0, 1, 1, 0, 0, 1, 1], k = 2, the correct answer is 6 (the subarray [1, 1, 1, 1, 1, 1] after flipping two zeros in the middle). 
Your function would return the total number of ones after flipping the first two zeros, which is not always the same as the length of the longest contiguous subarray.


*/
function maxNumberOfOnes( arr, k ){
    let start = 0 , end = 0 , maxLength = 0 ; 
    let currLength = 0, zerosChanged = 0 ; 
    for ( end = 0 ; end < arr.length ; end++ ) {
        if( arr[end] === 0 ){
            zerosChanged++ ; 
        }
        while( zerosChanged > k ){
            if( arr[start] === 0 ) {
                zerosChanged -- ; 
            }
            start++ ; 
        }
        maxLength = Math.max( end - start + 1, maxLength ) ;
    }
    return maxLength ; 
}
console.log( maxNumberOfOnes([0, 1, 1, 0, 0, 1, 1], 2 ))  //6
console.log( maxNumberOfOnes([1, 1, 1, 0, 0, 0, 1, 1], 2 )) //5
console.log( maxNumberOfOnes([0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 3 )) //9
console.log( maxNumberOfOnes([1, 0, 1, 0, 1], 1 )) //3

//o(2n)