## Titlecase

An npm package that adds a `titlecase` function to the String prototype.

Proposed algorithm:

* split the string into array
* uppercase the first char
* join the words
* exclude things like a an the (unless it is the first word)

TestCases
```javascript
'I\'m a little tea pot'.titlecase() should return a string.
'I\'m a little tea pot'.titlecase() should return “I’m a Little Tea Pot”.
'sHoRt AnD sToUt'.titlecase() should return “Short and Stout”.
'HERE IS MY HANDLE HERE IS MY SPOUT'.titlecase() should return “Here Is My Handle Here Is My Spout”.
```
