//1
function createArray(start, end) {
  let array = new Array();

  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  debugger;
  return array;
}
// console.log(createArray(1, 23));

//2 (a<b)
getNumbers = (a, b) => {
  if (a < b) {
    let ar = createArray(a, b);
    for (let i = 0; ar.length; i++) {
      for (let j = 0; j < ar[i]; j++) {
        console.log(ar[i]);
      }
    }
  } else {
    throw new Error("'a' param must be less then 'b' param");
  }
}

// getNumbers(1, 5);

//3
compact = (array) => {
  return Array.from(new Set(array));
}

// console.log(compact([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
