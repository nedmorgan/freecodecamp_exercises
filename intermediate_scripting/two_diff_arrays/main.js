function diffArray(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.filter(num => !arr1.includes(num) || !arr2.includes(num));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);