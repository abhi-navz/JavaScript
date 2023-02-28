// Primitive these used to be call by value.

// 7 types: String, NUmbler, Boolean, null, Undefined, Symbol, BigInt


const score = 100;
const isLoggedIn = false
const a = null
let b;

const id = Symbol('123')
const anotherid = Symbol('123')
// even tho the Symbol value is same for both but still id and another id are different.
console.log(id===anotherid);

const bigNumber = 3434424453n // n makes it bigInt
console.log(typeof(bigNumber));

// js is dynamically typed language so ther's no need to specify the time. the interpreter itself assign the type as per the value at the runtime.
// console.log(typeof(score));


// Reference Type (Non - Primitive)

// Array, Objects, Functions

const heros = ["sahkitman" , "nagraaj" , "doga", 404]

const object = {
    age: 22,
    name:"Abhinav",
    profession: "unemployed"
}
let x = function(){
    console.log("hello world");
}
console.log(typeof(x ));
console.log(typeof(a)); // typeof(null) --> object
console.log(typeof(object)); // --> object
console.log(typeof(id));  // --> symboll
