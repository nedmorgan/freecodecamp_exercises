function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  return collection.filter(obj =>
    sourceKeys.every(key =>
      obj.hasOwnProperty(key) && obj[key] === source[key]));
  // Only change code above this line
}

whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
});