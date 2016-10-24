// split the string into array
// uppercase the first char
// join the words
// exclude things like a an the (unless it is the first word)
const test1 = 'a cat sat on the mat'
const result1 = 'A Cat Sat on the Mat'

const wordArray = test1.split(' ')
const newString = wordArray.map(word => {
  const charArray = word.split('')
  charArray[0] = charArray[0].toUpperCase()
  return charArray.join('')
}).join(' ')

console.log(newString)