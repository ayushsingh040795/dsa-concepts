/*
Given an array of integers and a number K, find the maximum sum of any contiguous subarray of size K.
Input:
arr = [2, 1, 5, 1, 3, 2], K = 3
Output:
9
*/
function maxSum( arr, k ){
    let winStart = 0 ;
    let winEnd = 0 ;
    let maxSum = 0 ;
    let currentSum = 0 ;
    for ( winEnd = 0 ; winEnd < arr.length ; winEnd ++ ){
        currentSum += arr[winEnd] ; 
        if ( winEnd >= k - 1  ) {
            maxSum = Math.max(maxSum, currentSum) ;
            currentSum -= arr[winStart] ;
            winStart++ ;
        }
    }
    return maxSum ; 
}
console.log( maxSum([2, 1, 5, 1, 3, 2], 3 ) ) ;