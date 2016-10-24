String.prototype.titlecase = function () {
  const wordArray = this.split(' ')
  const newString = wordArray.map(word => {
    const charArray = word.split('')
    charArray[0] = charArray[0].toUpperCase()
    return charArray.join('')
  }).join(' ')

  return newString
}
