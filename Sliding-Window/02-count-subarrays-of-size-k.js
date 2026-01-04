/*Number of Subarrays of Size K
Problem:
    Count contiguous subarrays of size K.
    here we have to found how may sub arrays we can create with the given size
Input:
    [1, 2, 3, 4, 5], K = 2
Output:
    4 
Explanation:    
    The output is 4 because, for an array of length 5 and subarrays of size 2, you can form 4 contiguous subarrays:
    [1, 2][2, 3][3, 4][4, 5]
    Each subarray starts at a different position, and there are n - k + 1 such subarrays (5 - 2 + 1 = 4).
*/
function subarraysSize(arr, k) {
    let count = 0;
    let subarrays = [];
    for (let start = 0; start <= arr.length - k; start++) {
        console.log( start)
        let subarray = arr.slice(start, start + k);
        subarrays.push(subarray);
        count++;
    }
    return { count, subarrays };
}
console.log(subarraysSize([1, 2, 3, 4, 5], 2));