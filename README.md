## Titlecase

An npm package that adds a `titlecase` function to the String prototype.

Proposed algorithm:

* split the string into array
* uppercase the first char
* join the words
* exclude things like a an the (unless it is the first word)

TestCases
```javascript
titleCase(“I’m a little tea pot”) should return a string.
titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.
```
