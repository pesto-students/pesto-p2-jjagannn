// Write a function called vowelCount which accepts a string and returns a map where 
// the keys are numbers and the values are the count of the vowels in the string.

// Guidelines:
// 1.JS function should have Map API implemented.
// 2.Map’s set functionality should have been used.
// 3.Bonus - if space and time complexity is taken care.

function isVowel(char){
    const vowelSet = new Set("aeiou");
    return vowelSet.has(char);
}

function vowelCount(strInput){
    let vowelMap = new Map();
    for (let char of strInput){
        var lcChar = char.toLowerCase();
        if (isVowel(lcChar)){
            if (vowelMap.has(lcChar)){
                vowelMap.set(lcChar, vowelMap.get(lcChar)+1);
            } else {
                vowelMap.set(lcChar, 1);
            }
        }
    }
    return vowelMap;
}

const res = vowelCount("jagannathanio");
console.log(res);