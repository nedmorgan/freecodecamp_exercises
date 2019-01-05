function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (var i = 0; i < arr.length; i+=size) {  
    newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}