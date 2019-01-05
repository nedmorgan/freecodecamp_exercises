function mutation(arr) {
  let word1 = arr[1].toLowerCase();
  let word2 = arr[0].toLowerCase();
  for (var i = 0; i < word1.length; i++) {
    if (word2.indexOf(word1[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);