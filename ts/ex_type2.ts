export {}
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

// 내 코드
// type Combine<T, U> = {
//     [k in keyof (T & U)]: k extends (keyof T & keyof U) 
//                             ? T[k]|U[k] : k extends keyof U 
//                             ? U[k] : k extends keyof T 
//                             ? T[k] : never
// }

// 정답
type Combine<T, U> = {
    [k in keyof (T & U)]: k extends keyof T & keyof U
        ? T[k] | U[k]
        : (T&U)[k]
}
type ICombined = Combine<IUser, IDept>;

// ------------------------------------------------
function add(a: number, b: string, c : boolean) { 
    return `${a} - ${b} - ${c}`;
}
type FirstArgs<F> = F extends (...args : [infer T, ...args : any]) => any ? T : never
type SecondArgs<F> = F extends (...args : [a : any, infer T, ...(infer U)[]]) => any ? T : never
type Args<F> = F extends (...args : infer U) => any ?  U[number] : never


type A = FirstArgs<typeof add>;  // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>;    // number | string

type AX = Args<typeof String.prototype.endsWith>;    // ⇒ string | number | undefined
type AY = Args<typeof String.prototype.charAt>;      // ⇒ number

let a: A = 0;
let b: B = 'abc';
let c: C = Math.random() > 0.5 ? 1 : 'abc';
console.log('🚀 abc:', a, b, c);