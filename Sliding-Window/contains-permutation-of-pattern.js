/* 
Permutation in a String
Problem Statement
    Given a string and a pattern, determine whether the string contains any substring that is a permutation of the pattern.
    A permutation uses all characters of the pattern exactly once, but the order may differ.
    Return true if such a substring exists; otherwise, return false.
Example
    Input:
        string = "oidbcaf", pattern = "abc"
    Output:
        true
Explanation
    The substring "bca" exists in the string and contains exactly the same characters as "abc", just in a different order.
    Therefore, a permutation of the pattern is present.
*/
function hasPermutation( str, pattern ){
    let start = 0, end = 0, matched = 0 ;
    let freqMap = {} ; 
    for( let char of pattern ){
        freqMap[char] = ( freqMap[char] || 0 ) +  1 ; 
    }
    let requiredMatches = Object.keys(freqMap).length ; 
    for( end = 0 ; end < str.length ; end++){
        let rightChar = str[end] ; 
        if( rightChar in freqMap ){
            freqMap[rightChar]--; 
            if( freqMap[rightChar] === 0 ){
                matched++ ; 
            }
        }
        if( end >= pattern.length - 1 ){
            if( matched === requiredMatches ) {
                return true ;
            }
            let leftChar = str[start] ; 
            start++; 
            if ( leftChar in freqMap ) {
                if( freqMap[leftChar] === 0 ){
                    matched--
                }
                freqMap[leftChar]++ ; 
            }
        }
    }
    return false ; 
}
console.log( hasPermutation( "oidbcadf", "adbc" ) ) // true
console.log( hasPermutation( "odicf", "dc" ) ) // false
console.log( hasPermutation( "bcdxabcdy", "bcdyabcdx" ) ) // true
console.log( hasPermutation( "aaacb", "abc" ) ) // true