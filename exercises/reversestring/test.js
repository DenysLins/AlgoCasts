const reverse = require('./index')

test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses "abcd" string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses  " abcd" string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ')
})

test('Reverse reverses " " string', () => {
  expect(reverse(' ')).toEqual(' ')
})

test('Reverse reverses "d" string', () => {
  expect(reverse('d')).toEqual('d')
})

test('Reverse reverses "_denys " string', () => {
  expect(reverse('_denys ')).toEqual(' syned_')
})
