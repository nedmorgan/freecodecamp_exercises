function uniteUnique(arr) {
  let sortedArray = [];
  for (var arg = 0; arg < arguments.length; arg++) {
    let argsArray = arguments[arg];
    for(var i = 0; i < argsArray.length; i++) {
      let index = argsArray[i];
      if(sortedArray.indexOf(index) < 0) {
        sortedArray.push(index);
      }
    }
  }
  return sortedArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);