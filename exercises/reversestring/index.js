// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  // SOLUTION 1
  // return str.split('').reverse().join("")

  // SOLUTION 2
  // const arr = str.split('')
  // const len = arr.length

  // if (len === 1) {
  //   return arr[0]
  // }

  // return arr[len - 1] + reverse(arr.slice(0, len - 1).join(''))

  // SOLUTION 3
  // let result = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str[i]
  // }
  // return result

  // SOLUTION 4
  // let result = ''
  // for (const c of str) {
  //   result = c + result
  // }
  // return result

  // SOLUTION 5
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse
