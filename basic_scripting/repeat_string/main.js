// function repeatStringNumTimes(str, num) {
//   let nothing = "";
//   if(num > 0) {
//     return str.repeat(num);
//   } else {
//     return nothing;
//   }
// }

function repeatStringNumTimes(str, num) {
  let word = "";
  while(num > 0) {
  word = word.concat(str);
    num--;
  }
  return word;
}