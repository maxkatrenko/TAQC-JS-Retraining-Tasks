

function calcArrProduct(array) {
  return new Promise(function (res, rej) {
    array.forEach(element => {
      if (typeof (element) !== "number") {
        rej(new Error('Error! Incorrect array!'));
      }
    });
    res(array.reduce((a, b) => a + b, 0));
  });
}

(async () => {
  console.log(await calcArrProduct([1, 2, 3, 4, 5]));
})();

(async () => {
  console.log(await calcArrProduct([1, '2', 3, 4, 5]));
})();


