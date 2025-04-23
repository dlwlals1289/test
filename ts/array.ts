export {};
let ArrayOfStringOrNumber: (string | number)[] = [];
ArrayOfStringOrNumber.push(123);
ArrayOfStringOrNumber.push("222");
ArrayOfStringOrNumber.push(11 + 22);

console.log(ArrayOfStringOrNumber);

// let values = []; // 타입: any[]

// values.push('hong'); // 타입: string[]
// values.push(123);	 // 타입: (string | number)[]

// const value = Math.random() > 0.5
//    ? values[0]
//    : values[1];

let values: any[] = []; // 타입: any[]  "고정타입"

values.push('hong'); // 타입: any[]
values.push(123);	 // 타입: any[]

const value = Math.random() > 0.5
   ? values[0]
   : values[1];
console.log(value);
console.log(typeof value);

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];
const strings1 = ['lim', 'eun', 'ha'];

const nums3 = [...nums1, ...nums2];
const nums4 = [...nums1, ...strings1];
console.log(nums4);
console.log(typeof nums4);

const lim : [string, number] = ['Lim', 26];

let limTup: [string, number] = lim;

interface SomeInterface {
    [key: string]: number | undefined; // like this
}
let is: SomeInterface = {
    one: 1,
    two: 2,
}
is['one']?.toFixed(2);
type A = {       
    name: string, 
    age: number,  
 }; 
 
{
    type A = {name : string, addr : string};
    const blockA : A = {name : 'Hong', addr : 'Pusan'};
    console.log(blockA);
}
 

// -------------------------------------------------
const arr  = [1, 2, 3];
const arr2 : [number, number, number] = [4, 5, 6];

export {};