// string count char to obj\
// V1
// function charCount(str){
//     let obj = {}
//     for(let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase()
//         //alphanumeric only, test each character Regexp.test(str)
//         //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//         if(/a-z0-9/.test(char)){
//             if(obj[char] > 0){
//                 obj[char]++
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// V2 MODERN way of object count
// function charCount(str) {
//     let obj = {}
//     for (let char of str){
//         char = char.toLowerCase()
//         // or [a-z0-9]c
//         if(/[\w]/.test(char)){
//             // takes char
//             // if truthy, add 1 to it
//             // otherwise, or just set it equal to 1
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

// V3 is REGEX always better?
// could use `charCodeAt`
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code>47 && code <58) && // numeric(0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }
    return true
}

// function charCount(str) {
//     let obj = {}
//     for (let char of str){
//         char = char.toLowerCase()
//         if(isAlphaNumeric(char)){
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

// V4 how about toLowerCase() ?
function charCount(str) {
    let obj = {}
    for (let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}



console.log(charCount('Hello Hi'))