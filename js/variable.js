const n = 123; // 8byte
const bi = 123n; // 16byte

const n_bi1 = n === bi;
console.log("🚀 ~ n_bi1:", n_bi1)

const n_bi2 = n == bi;
console.log("🚀 ~ n_bi2:", n_bi2)

const nAddbi1 = n+Number(bi);
console.log("🚀 ~ nAddbi:", nAddbi1, typeof(nAddbi1))

const nAddbi2 = BigInt(n)+bi;
console.log("🚀 ~ nAddbi2:", nAddbi2, typeof(nAddbi2))

const s = 'abc';
const ss = new String('abc');
const sss = "abc";

const s_ss1 = s == ss;
console.log("🚀 ~ s_ss1:", s_ss1)

const s_ss2 = s === ss;
console.log("🚀 ~ s_ss2:", s_ss2)

const s_sss = s === sss;
console.log("🚀 ~ s_sss:", s_sss)

console.log("======================")

const hong ={id : 1, name : 'Hong'};
let kim  = {id : Symbol("Kim's id"), name : 'kim'};

console.log(hong == kim);
console.log(kim.id);
kim = hong
console.log(hong == kim);

const o1 = new Object();
const o2 = {};
const o1__o2 = o1 == o2;
console.log("🚀 ~ o1__o2:", o1__o2)
const o1___o2 = o1 === o2;
console.log("🚀 ~ o1___o2:", o1___o2)


const nStr = n.toString();
const nStr2 = new Number(n).toString();
console.log("🚀 ~ nStr:", nStr, typeof n);
console.log("🚀 ~ nStr2:", nStr2)

const i = 100;
i.toString();
const str = 10 + i.toString();
console.log(str);
console.log(i);

const nStr16 = n.toString(16);
const nStr16d = parseInt(nStr16, 16);
console.log("🚀 ~ nStr16d:", nStr16d)
