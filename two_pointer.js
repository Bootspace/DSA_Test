/**
 * Remove all non-numbers from the string - space, etc
 * Convert all uppercase to lowercase
 */

const isPalindrome = (s)=> {
    let left = 0;
    let right = s.length - 1;

    while (left < right){
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;

        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        };

        left++;
        right--;
    }

    return true;
}

const isAlphaNumeric = (c) => {
    return /[a-z0-9]/i.test(c);
}

console.log(isPalindrome("race a car"));