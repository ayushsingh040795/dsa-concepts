/*  
Return the average of all contiguous subarrays of size K
Input:
[1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5
Output:
[2.2, 2.8, 2.4, 3.6, 2.8]
*/
function averageSum( arr, k ){
    let winStart = 0 ;
    let winEnd = 0 ;
    let sum = 0 ;
    let avgArr = [] ; 
    for( winEnd = 0 ; winEnd < arr.length ; winEnd ++ ){
        sum += arr[winEnd] ; 
        if ( winEnd >= k - 1 ) {
            avgArr.push( sum/k ) ; 
            sum -= arr[winStart] ; 
            winStart++
        }
    }
    return avgArr ; 
}
console.log( averageSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5  ) ) ; 