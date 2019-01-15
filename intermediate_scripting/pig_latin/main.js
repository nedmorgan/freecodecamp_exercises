function translatePigLatin(str) {
  let newWord = '';
  let vowel = /[aeiou]/gi;
  if(str[0].match(vowel)) {
    newWord = str + "way";
  } else if(str.match(vowel) === null) {
    newWord = str + "ay";
  } else {
    let vowelIndex = str.indexOf(str.match(vowel)[0]);
    newWord = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
  }
  return newWord;
}

translatePigLatin("consonant");