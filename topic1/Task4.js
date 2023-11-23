
const triange = (a, b, c) => {

  if (a, b, c <= 0 || isNaN(a, b, c) || a, b, c === null) {
    throw new Error('Incorrect data');
  }

  let h = (a * b) / c;
  return Number((b * h) / 2).toFixed(3);
}

console.log(triange(2, 4, 6));