function smallestCommons(arr) {
  arr.sort(function (a, b) { return a - b });
  let min = arr[0];
  console.log(min);
  let lastElement = arr[arr.length - 1];
  let newArray = [];
  for (var i = min; i <= lastElement; i++) {
    newArray.push(i);
    }
    console.log(newArray);

    let lcm = newArray[0];
    for(i = 1; i < newArray.length; i++) {
      let GCD = gcd(lcm, newArray[i]);
      lcm = (lcm * newArray[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {
      if(y === 0) {
        return x;
      } else {
        return gcd(y, x % y);
      }
    }
}


smallestCommons([2, 10]);