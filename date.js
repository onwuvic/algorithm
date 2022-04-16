const moment = require('moment');
const btoa = require('btoa');

// const cdate = convert("02", "00");
// const pdate = convert("01", "23");
// const cdate = convertToDate("2", "30", "3");
// const pdate = convertToDate("1", "1", "23");
// console.log('--->cdate', cdate);
// console.log('--->pdate', pdate);
// console.log('--->you', cdate.month(), cdate.date(), cdate.hour());
// // var diff = moment(cdate).diff(pdate, 'hours');
// var diff = cdate.diff(pdate, 'hours');
// const time = moment.utc(pdate).format("HH");
// const time2 = moment.utc(cdate.diff(pdate)).format("HH");
// const time = moment('1970-01-01T00:00:00.000Z').format('HH:mm');
// moment('2001-02-29 06')
// const me = moment.utc('02-02 00:00:00', "MMDD, HH:mm:ss a");

// console.log('-----moment new data', me);

// console.log('--->', diff);
// console.log('--->', cdate.isValid(), pdate.isValid());

// function convertToDate(month, day, time) {
//     const doubleDigitMonth = month.split('').length == 2 ? month : `0${month}`;
//     const doubleDigitDay = day.split('').length == 2 ? day : `0${day}`;
//     const doubleDigitTime = time.split('').length == 2 ? time : `0${time}`;
//     // convert from 24 hours to 12 hours
//     // return new Date(`2001-${doubleDigitMonth}-${doubleDigitDay}T${timeString}Z`)
//     return moment.utc(`${doubleDigitMonth}-${doubleDigitDay} ${doubleDigitTime}:00:00`, "MMDD, HH:mm:ss a");
//         // .toLocaleTimeString({}, {timeZone:'UTC', month: 'long', day: 'numeric', hour12: true, hour:'numeric', minute:'numeric'});
//     // return timeString12hr;
// }

// function tConvert(time) {
//     // Check correct time format and split into components
//     time = `${time}:00:00`.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
//     if (time.length > 1) { // If time format correct
//       time = time.slice (1);  // Remove full string match value
//       time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
//       time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join (''); // return adjusted time or original string
// }

// function getTimeDiff(start, end) {
//     return moment.duration(moment(end, "HH:mm:ss a").diff(moment(start, "HH:mm:ss a")));
// }

// function eith() {
//   const eighteenYearsAgo = moment().subtract('years', 18);
//   console.log('---->', eighteenYearsAgo);
//   // const birthday = moment(date);
//   // return eightYearsAgo.isAfter(birthday);
// }

// eith()
  
//   const convertToDate = function(month, day, time) {
//     const doubleDigitMonth = month.split('').length == 2 ? month : `0${month}`;
//     const doubleDigitDay = day.split('').length == 2 ? day : `0${day}`;
//     const doubleDigitTime = time.split('').length == 2 ? time : `0${time}`;
//     const timeString = `${doubleDigitTime}:00:00`;
//     // use an abitrary year, it is not important.
//     return new Date(`2001-${doubleDigitMonth}-${doubleDigitDay}T${timeString}Z`);
//   }
// 2021-01-09
// const er = moment.unix(1610146800).format('YYYY-MM-DD');
// console.log('---->', er);
// const unix = moment('2021-01-09', 'YYYY-MM-DD').unix();
// console.log('---->', unix);

// const formatDate = (date) => {
//     if (typeof date !== "object") {
//       const fDate = typeof date === 'number' 
//       ? moment.unix(date).format('DD-MM-YYYY')
//       : date
//       return fDate;
//     }
//     return '--'
// }

// console.log(formatDate("2020-12-14"));

function dateOfTheWeek() {
  // const date = new Date(`Sat Mar 06 2021 00:00:00 GMT+0100 (West Africa Standard Time)`);
  const date = moment.utc(`Sat Mar 06 2021 00:00:00 GMT+0100 (West Africa Standard Time)`);
  console.log(date.day());
  let TwoFridaysFromNow;
  if (date.getDay() === 6) {
    TwoFridaysFromNow = moment(date).add(5, 'week').day("friday")
  } else {
    TwoFridaysFromNow = moment(date).add(4, 'week').day("friday")
  }
  // console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
  // console.log(date.getDate()); 25
  // console.log(date.getDay()) // 0   0 - 6
  // console.log(
  //   date.getDate() + 
  //   (
  //     (5 + 7 - date.getDay())
  //   ));

  // // 33
  // date.setDate(
  //   // 40
  //   date.getDate() + 
    
  //   (
  //     5 + 7 - date.getDay()
  //   )
  // );
  console.log(moment(TwoFridaysFromNow).format('MMMM Do YYYY, h:mm:ss a'));
  // return date;
  // console.log(moment(moment().startOf('isoWeek').add(2, 'week').day("friday")).format('MMMM Do YYYY, h:mm:ss a'));
}

// date = new Date(`Sat Feb 27 2021 00:00:00 GMT+0100 (West Africa Standard Time)`);

// console.log(
//   moment(
//     moment(date).clone().add(2, 'week').day("friday")
//   ).format('MMMM Do YYYY, h:mm:ss a')
// );

const isEqualToNumberOfDay = (timestamp, numberOfDay) => {
  console.log(timestamp);
  const timestampToDate = moment(timestamp).startOf('day')
  const currentDate = moment().startOf('day')
  const diffInDays = moment.duration(currentDate.diff(timestampToDate)).asDays()

  console.log('-----> days', diffInDays, timestampToDate)
  return diffInDays === numberOfDay
}

const y = moment()
.subtract(3, 'days')
// .format('x')
.valueOf()

//  console.log('----date', moment(1623736008000).format('MMMM Do YYYY, h:mm:ss a'), moment(y).format('MMMM Do YYYY, h:mm:ss a'))

// three day ago 1623563408469

// 1623802450546 16th
// 1623736008000 15th
// 1623649608000 14th
// 1623563208000 13th
// 1623476808000 12th
// 1623390408000 11th
// 1623304008000 10th
// 1623163050119 8th
//  console.log(1623736008000 <= y)
//  console.log(y)


// console.log(isEqualToNumberOfDay(moment().subtract(3, 'days').valueOf(), 3))

// dateOfTheWeek();

console.log('----base64', btoa('devs@construyo.de'))

