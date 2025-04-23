export {}; 
let myName;
myName = "adsf";
console.log(myName);

myName = 24;
console.log(myName);

type Name =  'Hong' | 'Kim' | 'Lee' ;
type someType = {
    id: number | string,
    name: Name, 
    age: number,
    address: string;
}

const something = ({ id, name, age, address }: someType) => {
    console.log({id, name, age, address});
 } 

const user : someType = {id : 1, name : "Hong", age : 23, address : "adfa"};
something(user);

let x : string | undefined ;
let y : undefined;
let z = "hello";
x = (x)? z : x;
console.log(x);

// type Member = {
//    name: string,
//    addr: string,
//    discountRate?: number;
// };

// type Guest = {
//    name: string,
//    age: number,
// };

// type Customer = Member | Guest;

// let cust : Customer ;
// let m: Member = {
//    name: '홍길동',
//    addr: '용산구',
//    discountRate: 0.1,
// };
// let g: Guest = {
//    name: '홍길동',
//    age: 26,
// };


// const customer = {
//    name: '홍길동',
//    addr: '용산구',
//    discountRate: 0.1,
//    // age: 26,
// };

// const customer2 = {
//    name: '홍길동',
//    age: 26,
//    // addr: '용산구',
//    // discountRate: 0.1,
// };
// console.log(typeof customer === typeof customer2);

let gildong = Math.random() > 0.5 && 'Honggildong';

console.log(gildong);