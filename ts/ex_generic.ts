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

type Change<T, K extends keyof T, U> = {
    [x in keyof T] : x extends K ? U: T[x]

}
// type Change<T, K extends keyof T, U> = K extends T ? T[keyof T]:U;


type DeptCaptain = Change<IDept, 'captain', IUser>;
// type Err = Change<IDept, 'xxx', IUser>; // 존재하지 않는 키는 Error!!!


console.log("------------------------------");
type Item = { item: string; price: number };
type ItemPrice<T, U> = {
    [x in keyof T] : T[x] extends string ? keyof U : T[x]
}
type tmp = ItemPrice<Item, typeof stock>;
const stock = {X: 1, Y: 2, Z: 30};

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce((curr, itemPrice) => 
                  curr + stock[itemPrice.item] * itemPrice.price, 0);

console.log("------------------------------");
// T: input array 타입, U: T의 key 타입
//U extends keyof T ? T : U
function deleteArray<T, U>(arr: Array<T>, startOrKey: U extends keyof T ? U : number, endOrValue?: unknown):T[] {
    if (typeof startOrKey === 'number') {
        if (typeof endOrValue === 'number') {
            return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
        }
        return arr.slice(0, startOrKey);
    }
  
    if (typeof startOrKey === 'string') {
        return arr.filter(e => {
          if (e && typeof e === 'object') {
            // e[startOrKey]
            return e[startOrKey] !== endOrValue;
          }
        });
    }

    return arr;
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

