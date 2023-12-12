

const AVARAGE_DAYS_IN_ONE_MONTH = 30.436875;
const HOURS_IN_ONE_DAY = 24;
const SECS_IN_ONE_MIN = 60;
const SECS_IN_ONE_HOUR = 3600;
const SECS_IN_ONE_DAY = HOURS_IN_ONE_DAY * SECS_IN_ONE_HOUR;
const SECS_IN_ONE_MONTH = AVARAGE_DAYS_IN_ONE_MONTH * HOURS_IN_ONE_DAY * SECS_IN_ONE_HOUR;


function getSeconds(hours, days, months) {

  let secH = hours * SECS_IN_ONE_MIN;
  let secD = days * SECS_IN_ONE_DAY;
  let secM = months * SECS_IN_ONE_MONTH;

  return {
    secH,
    secD,
    secM
  }

};

console.log(getSeconds(2, 2, 2));