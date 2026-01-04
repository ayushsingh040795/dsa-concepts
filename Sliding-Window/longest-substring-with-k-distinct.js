/* 
Longest Substring with K Distinct Characters
    Input:
        "araaci", K = 2
    Output:
        4 
    The longest substring with at most 2 distinct characters is "araa", which has length 4.
*/
function longestSubstring( str, k ){
    let start=0, end = 0 ;
    let charFreq = {} ; let strLength  = 0 ; let maxStart = 0 ;
    for( end = 0 ; end < str.length ; end++ ){
        let rightChar = str[end] ; 
        charFreq[rightChar] = ( charFreq[rightChar] || 0 ) + 1 ; 
        while( Object.keys( charFreq ).length > k ){
            let leftChar = str[start];
            charFreq[leftChar]-- ; 
            if( charFreq[leftChar] === 0 ){
                delete charFreq[leftChar] ; 
            }
            start++ ; 
        }
        // strLength = Math.max( strLength, end-start+1) ;
        if( end - start + 1 > strLength ) {
            strLength = end - start + 1 ; 
            maxStart = start ; 
        } 
    }
    let longestString = "" ; 
    for( let i = maxStart ; i < strLength + maxStart ; i++ ){
        longestString += str[i] ; 
    }
    return {strLength, longestString }  ; 
}
console.log(longestSubstring("araaaaci", 2)); // 6
console.log(longestSubstring("araaci", 2));   // 4
console.log(longestSubstring("cbbebi", 3));   // 5