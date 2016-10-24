// split the string into array
// uppercase the first char
// join the words
// exclude things like a an the (unless it is the first word)
String.prototype.titlecase = function () {
  const wordArray = this.split(' ')
  const newString = wordArray.map(word => {
    const charArray = word.split('')
    charArray[0] = charArray[0].toUpperCase()
    return charArray.join('')
  }).join(' ')

  return newString
}
