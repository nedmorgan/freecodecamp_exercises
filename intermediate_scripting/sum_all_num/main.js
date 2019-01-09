function sumAll(arr) {
  let newArray = [...arr].sort();
  for(var i = newArray[0]; i < newArray[1]; i++) {
    newArray.splice(newArray[1], 0, i);
  }
  return newArray;
}

sumAll([4, 1]);