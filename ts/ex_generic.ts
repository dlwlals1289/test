import { jadeX } from "jade";
import { Factory } from "./generic";

interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

// 내 코드, 정답
type Change<T, K extends keyof T, U> = {
    [x in keyof T] : x extends K ? U: T[x]

}

type DeptCaptain = Change<IDept, 'captain', IUser>;
// type Err = Change<IDept, 'xxx', IUser>; // 존재하지 않는 키는 Error!!!


console.log("------------------------------");
type Item = { item: string; price: number };

// 내 코드
// type ItemPrice<T, U> = {
//     [x in keyof T] : T[x] extends string ? keyof U : T[x]
// }

// 정답
type ItemPrice<T, U> = {
    [k in keyof T]: k extends 'item' ? keyof U : T[k];
};
type tmp = ItemPrice<Item, typeof stock>;
const stock = {X: 1, Y: 2, Z: 30};

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
//   { item: 'P', price: 4000 } // error
];

const total = itemPrices.reduce((curr, itemPrice) => 
                  curr + stock[itemPrice.item] * itemPrice.price, 0);

console.log("------------------------------");
// 내 코드
// function deleteArray<T, U>(
// arr: Array<T>, 
// startOrKey: U extends keyof T ? U : number, 
// endOrValue?: unknown
// ):T[] {
//     if (typeof startOrKey === 'number') {
//         if (typeof endOrValue === 'number') {
//             return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
//         }
//         return arr.slice(0, startOrKey);
//     }
  
//     if (typeof startOrKey === 'string') {
//         return arr.filter(e => {
//           if (e && typeof e === 'object') {
//             // e[startOrKey]
//             return e[startOrKey] !== endOrValue;
//           }
//         });
//     }

//     return arr;
// }

// 정답
function deleteArray<T, U>(
    arr:T[], 
    startOrKey: number | keyof T,
    endOrValue?: number | T[keyof T]
) {
    if (typeof startOrKey === 'number') {
        if (typeof endOrValue === 'number') {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }
  
    if (typeof startOrKey === 'string') {
        return arr.filter(e => {
          if (e && typeof e === 'object') {
            return e[startOrKey] !== endOrValue;
          }
        });
    }

    return [];
}
const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

const users = [{ id: 1, name: 'Hong' }, { id: 2, name: 'Kim' }, { id: 3, name: 'Lee' }];

console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, 'id', 2)); // [Hong, Lee]
console.log(deleteArray(users, 'name', 'Lee')); // [Hong, Kim]

let x : Hana7 = { id: 1, name: 'Hong' };
let ft : Factory<string>;

console.log(jadeX);