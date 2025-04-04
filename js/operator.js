const n = 1;
const nil = null;
const undef = undefined;

console.log(n+nil);
console.log(n+undef);
console.log(+undefined);
console.log("=============");

let x = 5;
console.log(3 - -x); // ? → , 10 / 0 ⇒⇒⇒ error?
console.log(10 + -x * 2); // ? →
console.log(-10 * -x * -2); // ? →
console.log(-10 / -x * -2); // -1 or -4 →
console.log(2 ** 3 ** 2); // 512(29) 제곱은 순서가 뒤에서부터!
console.log(x++, ++x); // ? → cf. log: function(x, y, …z)

let xxx = x++;
console.log(xxx);
xxx = ++x;
console.log(xxx);
console.log("=============");

let aa = 1;
let bb = 2;
const cc =  (aa++, ++bb, bb +1);
const dd =  (aa--, aa +bb);
console.log(aa, bb, cc, dd);

const T = true, F = false; 
x = 1;
console.log(T || x++, x);
console.log(T && x++, x);

let a = [], b = ' ', c = 'false', d = '0';
console.log(a ? 'T' : 'F', !!b, !!c, !!d);
console.log(typeof c, typeof d);

const first = '', last = 'Bob';
console.log(`${first} ${last}`);
console.log(first+last);
console.log(`${first}${first ? ' ' : ''}${last}`); // Good
console.log(`${first}${first && ' '}${last}`); // Best!

let num = 2;
console.log(false && num++, num);
console.log(num);
console.log((2.4 % 1).toFixed(1));