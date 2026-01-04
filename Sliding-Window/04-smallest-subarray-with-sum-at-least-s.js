/* 
Find the length of the smallest subarray with sum ≥ S.
    Input:
        [2, 1, 5, 2, 3, 2], S = 7
    Output:
        2 
*/
function smallestSubarraysum( arr, k ){
    let winStart = 0 ; 
    let winEnd = 0 ;
    let sum = 0  ; 
    let maxArrLength = arr.length + 1 ;
    let currentArrLenght = 0 ; 
    for ( winEnd = 0 ; winEnd < arr.length ; winEnd ++ ){
        sum += arr[winEnd] ; 
        while( sum >= k ){
            currentArrLenght = winEnd - winStart + 1 ;
            maxArrLength = Math.min(currentArrLenght, maxArrLength);
            sum -= arr[winStart] ; 
            winStart++ ;  
        }
    }
    return maxArrLength ; 
}
console.log( smallestSubarraysum([2, 1, 5, 2, 3, 2, 7 ], 7 ))