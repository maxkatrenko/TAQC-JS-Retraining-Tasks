//1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//2
console.log('Task 2:');
array.forEach(x => console.log(`[${x}] - ${array[x]}`));

//3
console.log('Task 3:');
array.forEach(x => x % 7 === 0 ?
  console.log(`The value ${x} is a mulitple of 7`) :
  console.log(`The value ${x} is not a mulitple of 7`));

//4
console.log('Task 4:');
array.sort((a, b) => b - a);
console.log(array);

//5
console.log('Task 5:');
array.fill(0, array.length / 2, array.length)
console.log(array);

//6
console.log('Task 6:');
array.splice(0, 3);
console.log(array);

//7
console.log('Task 7:');
let set = new Set(array);
let countDublicates = array.length - set.length;

if (set.length !== array.length) {
  console.log(`Array contains dublicates`);
} else {
  console.log(`Array does not contains dublicates`);
}

//8
console.log('Task 8:');
let newArray = array.slice(array.length / 2, array.length);
console.log(newArray);


//9
console.log('Task 9:');
let counter = 0;
newArray.filter(x => x % 2 === 0 ? counter++ : null);
console.log(`Array contains ${counter} even numbers`);