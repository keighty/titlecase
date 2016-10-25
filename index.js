String.prototype.titlecase = function () {
  const wordArray = this.split(' ')
  const restrictedWords = ['a', 'the', 'an', 'and']
  const newWordArray = wordArray.map(word => {
    const downcaseWord = word.toLowerCase()
    if(restrictedWords.includes(downcaseWord)) return downcaseWord
    return word.capitalize()
  })
  newWordArray[0] = newWordArray[0].capitalize()
  return newWordArray.join(' ')
}

String.prototype.capitalize = function () {
  const charArray = this.toLowerCase().split('')
  charArray[0] = charArray[0].toUpperCase()
  return charArray.join('')
}
