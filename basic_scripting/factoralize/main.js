function factorialize(num) {
  for(var total = 1; num > 0; num--) {
    total *= num;
  }
  return total;
}

factorialize(5);