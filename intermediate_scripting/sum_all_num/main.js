function sumAll(arr) {
  let newArray = [...arr].sort();
  let max = Math.max(newArray[0], newArray[1]);
  let min = Math.min(newArray[0], newArray[1]);
  let num = 0;
  for(var i = min; i <= max; i++) {
    num += i;
  }

  return num;
}

sumAll([4, 1]);