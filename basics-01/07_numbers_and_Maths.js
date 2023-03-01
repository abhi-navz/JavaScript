const score = 400;
const balance = new Number(500)
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8965;
// console.log(otherNumber.toPrecision(4));
 // will give precise value of 4 digits that's 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
 // en-IN puts the commas as per the indian standard, while en-US puts the comma as per the US standards.


// **************Maths************


// console.log(Math);
// console.log(Math.abs(-4)); // gives absolute value of a number.
// console.log(Math.round(4.55)); // rounds off
// console.log(Math.ceil(4.25)); // chooses uppper value of 4 tha's 5
// console.log(Math.floor(4.9)); // chooses lower value tha's 4 in the case.

// console.log(Math.min(4,2,5,8));
// console.log(Math.max(4,2,5,8));

console.log(Math.random()); // always give value between 0 and 1.
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min  = 10
const max = 20;
a = Math.floor(Math.random() * (max - min +1) + min)
console.log(a);