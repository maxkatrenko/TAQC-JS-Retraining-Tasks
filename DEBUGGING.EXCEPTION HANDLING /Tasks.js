
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Validation Error';
  }
}


//1
function calcRectangleArea(width, height) {
  if (typeof (width) !== 'number' || typeof (height) !== 'number') {
    throw new ValidationError('Width and Height of the rectangle should be type of "number"');
  }
  return width * height;
}

// console.log(calcRectangleArea(4.2, 5));

//2
function getUser(id) {
  if (typeof (id) !== 'number') {
    throw new ValidationError("Type of 'id' should be 'number'");
  }
  return { id }
}

// console.log(getUser(1));

function getUsers(ids) {
  ids.forEach(element => {
    getUser(element);
  });
  return { ids }
}

// console.log(getUsers([1, 2, 3, 4, 5, 6]));

//3
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "Month Exception";
  }
}

function showMonthName(month) {
  switch (month) {
    case (1):
      console.log(month + ' is January');
      break;
    case (2):
      console.log(month + ' is February');
      break;
    case (3):
      console.log(month + ' is March');
      break;
    case (4):
      console.log(month + ' is April');
      break;
    case (5):
      console.log(month + ' is May');
      break;
    case (6):
      console.log(month + ' is June');
      break;
    case (7):
      console.log(month + ' is July');
      break;
    case (8):
      console.log(month + ' is August');
      break;
    case (9):
      console.log(month + ' is September');
      break;
    case (10):
      console.log(month + ' is October');
      break;
    case (11):
      console.log(month + ' is November');
      break;
    case (12):
      console.log(month + ' is December');
      break;
    default:
      throw new MonthException('Incorrect month number');
  }
}

showMonthName(12);


