String.prototype.titlecase = function () {
  const wordArray = this.split(' ')
  const restrictedWords = ['a', 'the', 'an', 'and']
  wordArray[0] = wordArray[0].capitalize()
  return wordArray.map(word => {
    if(restrictedWords.includes(word)) return word
    return word.capitalize()
  }).join(' ')
}

String.prototype.capitalize = function () {
  const charArray = this.toLowerCase().split('')
  charArray[0] = charArray[0].toUpperCase()
  return charArray.join('')
}
