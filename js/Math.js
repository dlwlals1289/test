
console.log(Math.abs(-1) );    // 1
console.log(Math.abs('-3'));   // 1
console.log(Math.abs('') );    // ?   cf. Number('') ⇒ 0
console.log(Math.abs([]));     // ?   cf. Number([]) ⇒ 0
console.log(Math.abs(null));   // ?   cf. Number(null) ⇒ 0
console.log(Math.abs());            // NaN    cf. Number() ⇒ 0
console.log(Math.abs(undefined));   // ?    cf. Number(undefined) ⇒ NaN
console.log(Math.abs({}));          // ?    cf. Number({}) ⇒ NaN, Boolean({}) ⇒ true
console.log(Math.abs('abc'));       // ?
console.log(Math.abs(0.3 - 0.2));   // ?

console.log(100n === 100); 
console.log(100n == 100); 

console.log("-------- DATE ---------");
const moment = require('moment')
console.log(moment().format('L')); // 04/16/2025
console.log(moment().format('LL')); // April 16, 2025
console.log(moment().format('LLL')); // April 16, 2025 1:44 PM
console.log(moment().format('LLLL')); // Wednesday, April 16, 2025 1:44 PM