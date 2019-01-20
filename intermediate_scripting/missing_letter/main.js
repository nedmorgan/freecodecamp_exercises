function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    let letter = str.charCodeAt(i);
    if (letter !== str.charCodeAt(0) + i) {
      return String.fromCharCode(letter - 1);
    } 
  }
  return undefined;
}

fearNotLetter("abce");