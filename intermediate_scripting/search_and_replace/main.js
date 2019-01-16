function myReplace(str, before, after) {
  var i = 0;
  let character = "";
  let wordAfter = "";
  while (i <= before.length) {
    character = before.charAt(i);
    console.log(character);
    if (character === before.charAt(0).toUpperCase()) {
      wordAfter = after.charAt(0).toUpperCase() + after.substr(1, after.length);
      console.log(wordAfter);
      return str.replace(before, wordAfter);
    } else {
      return str.replace(before, after);
    }
  }
  i++;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")