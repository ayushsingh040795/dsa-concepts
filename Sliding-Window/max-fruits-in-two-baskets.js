/* 
Problem Statement
    You are given an array where each element represents a type of fruit arranged in a row of trees.
    You can collect fruits from a contiguous section using only two baskets, and each basket can hold only one type of fruit.
    You must pick exactly one fruit from each tree in the selected section.
    Return the maximum number of fruits you can collect.
Example
    Input:
        [1, 2, 1, 2, 3]
    Output:
        4
Explanation
    The longest contiguous section that contains at most two fruit types is [1, 2, 1, 2].
    It contains only fruit types 1 and 2, and its length is 4.
    Including 3 would require a third basket, which is not allowed.
*/
function maxFruits( arr, k ){
    let start = 0 , end = 0, numOfFruits = 0 ; maxStart = 0 ; 
    let finalFruitsArra = [] ; 
    let arrFreq = {} ; 
    for ( end = 0 ; end < arr.length ; end++){
        let index = arr[end] ; 
        arrFreq[index] = ( arrFreq[index] || 0 ) + 1 ;
        while ( Object.keys(arrFreq).length > k ){
            let rightIndex = arr[start] ; 
            arrFreq[rightIndex]-- ; 
            if( arrFreq[rightIndex] === 0 ){
                delete arrFreq[rightIndex] ; 
            }
            start++ ; 
        }
        if( end - start + 1 >  numOfFruits ) {
            numOfFruits = Math.max( numOfFruits, end - start + 1 ) ;
            maxStart = start ; 
        }
    }
    for( let i = maxStart ; i < maxStart+numOfFruits ; i++ ){
        finalFruitsArra.push( arr[i]) ; 
    } 
    return {numOfFruits, finalFruitsArra }  ; 
}
console.log( maxFruits( [1,2,1,2,3,3,3,3,2], 2 ) ) ;