//Get the length of the string.
const characterReplacement = function(s,k) {
    let left = 0;
    let maxFreq = 0;
    let count = {};
    let result = 0;

    for(let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        //Update max repeating character count
r        maxFreq = Math.max(maxFreq, count[char]);

        //If window is invalid, shrink the window from the left
        while((right - left + 1) - maxFreq > k) {
            count[s[left]] --;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};

console.log(characterReplacement("AABABBA", 1));