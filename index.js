String.prototype.titlecase = function () {
  const wordArray = this.split(' ')
  return wordArray.map(word => {
    return word.capitalize()
  }).join(' ')
}

String.prototype.capitalize = function () {
  const charArray = this.split('')
  charArray[0] = charArray[0].toUpperCase()
  return charArray.join('')
}