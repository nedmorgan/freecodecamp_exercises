function pairElement(str) {
  let innerArr = [];
  let search = function (char) {
    switch (char) {
      case "A":
        innerArr.push(["A", "T"]);
        break;
      case "T":
        innerArr.push(["T", "A"]);
        break;
      case "G":
        innerArr.push(["G", "C"]);
        break;
      case "C":
        innerArr.push(["C", "G"]);
    }
  }
  for (var i = 0; i <= str.length; i++) {
    search(str[i]);
  }
  return innerArr;
}

pairElement("GCG");