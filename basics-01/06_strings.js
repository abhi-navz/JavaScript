const name = "Abhinav"
const repoCount = 6

// console.log(name + repoCount + " repos");

console.log(`Hello my name is ${(name)} and my repo count is ${repoCount}`);

const gameName = new String('abhinav-gs-com')

// console.log(gameName[0]);

// ********STring methods**********
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4); // it takes characters at index 0,1,2,3 not at 4.
// console.log(newString);

const anotherString = gameName.slice(-9,4)
// console.log(anotherString);

const s3 = "         abhinav   "
// console.log(s3);
// console.log(s3.trim()); // trim removes starting and ending spaces n all 

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-')) // replaces the first entry with the second entry.

// console.log(url.includes('abhi'))

console.log(gameName.split('-'));
