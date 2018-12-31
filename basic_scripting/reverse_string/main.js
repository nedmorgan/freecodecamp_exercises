function reverseString(str) {
  let string = str.split("").reverse().join("");
  return string;
}

reverseString("hello");