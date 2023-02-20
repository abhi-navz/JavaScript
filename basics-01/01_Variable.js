const accountId =34434
let accountEmail ="avi.gmail.com"
var accoutPassword ="12345" 
accountCity ="Jaipur" // not a good way to declare varible though it's possible.

let accountState; // if varible isn't declared then javscript will see it as undefined.

// accountId = 3434 //not allowed to change constant

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

accountEmail="abhi@gmail.com"
accoutPassword="monish"
accountCity="Bangluru"

console.log(accountId);
console.table([accountId, accountEmail, accoutPassword, accountCity, accountState])

 