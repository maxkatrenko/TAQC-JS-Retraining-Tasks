
const filterMostOftenNumber = numsArr => {
  return numsArr.sort(
    (a, b) => numsArr.filter(x => x === a).length -
      numsArr.filter(x => x === b).length).pop();
}

console.log(filterMostOftenNumber([1, 2, 3, 2, 5, 2, 7, 3, 9, 4]));