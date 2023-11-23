
const primeNumbers = numsArr => {
  return numsArr
    .filter(x => x % 3 === 0)
    .filter(x => x % 5 === 0)
    .filter(x => x % 7 === 0)
    .filter(x => x % 11 === 0)
    .filter(x => x % 13 === 0);
}

console.log(primeNumbers([15015, 12345, 65476, 257654, 157543, 3576543]))