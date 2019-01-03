function frankenSplice(arr1, arr2, n) {
  let array1 = arr1.slice(" ");
  let array2 = arr2.slice(" ");
  array2.splice(n, 0, ...array1);
  return array2;
}