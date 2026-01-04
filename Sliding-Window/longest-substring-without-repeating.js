/*
Longest Substring Without Repeating Characters
Input:
"abcabcbb"
Output:
3
*/
function longestSubstrWithoutRepeating( str ){
    let start = 0 , end = 0 , maxLength = 0 ; charFreq = {}, maxStart = 0 ;  
    for ( end = 0; end < str.length ; end++ ){
        let leftChar = str[end] ; 

        /* 
            This checks if the current character has already appeared in the current window (i.e., its last seen index is at or after start).
            If so, it moves the start pointer to one position after the previous occurrence of this character, ensuring all characters in the window are unique.
        */
        if( charFreq[leftChar] !== undefined && charFreq[leftChar] >= start ){
            start = charFreq[leftChar] + 1 ; 
        }

        /* 
            This updates the last seen index of the current character to the current position end.
        */
        charFreq[leftChar]= end  ; 
        if ( end - start + 1 > maxLength ){
            maxLength = Math.max( maxLength, end - start + 1 ) ;
            maxstart = start
        }
        //condition to check jb the value 2 nahi hoti ;
    }
    let subString = "" ; 
    for ( let i = maxStart ; i < maxStart+maxLength ; i++ ) {
        subString += str[i] ; 
    }
    return {maxLength, subString} ; 
}
console.log( longestSubstrWithoutRepeating("abcdabcbb") ) //4
console.log( longestSubstrWithoutRepeating("bbbbb") )    //1
console.log( longestSubstrWithoutRepeating("pwwkew") )   //3