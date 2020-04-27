// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1])
}

// SOLUTION 2
// function palindrome (str) {
//   return str === str.split('').reverse().join('')
// }

// SOLUTION 1
// function palindrome (str) {
//   let j = str.length - 1
//   for (let i = 0; i < parseInt(str.length / 2); i++) {
//     if (str[i] !== str[j]) return false
//     j--
//   }
//   return true
// }

module.exports = palindrome
