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
  const s = str.split('')
  const len = s.length

  if (len === 1) {
    return s[0]
  }

  return s[len - 1] + reverse(s.slice(0, len - 1).join(''))
}

module.exports = reverse
