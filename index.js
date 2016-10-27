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

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}
