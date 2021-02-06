// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

let today = new Date();
let now = today.getTime();
let lastNight = new Date(2021, 01, 05, 16, 00, 00, 00);
let midnight = lastNight.getTime();

// console.log(today, lastNight, now, midnight);
// console.log(now-midnight);

let one_minute = 1000 * 60;
let totalMin = (now - midnight)/one_minute;
console.log(Math.floor(totalMin)); // about 347 minutes from midnight to 05:47 am