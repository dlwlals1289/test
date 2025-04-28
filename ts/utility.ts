async function f(p: Promise<string>) {
    let a: Awaited<string> = await p; // let a: string
    return a;
}

async function gf<T>(promi: T) {
    const a = await promi; // const a: Awaited<T>
    const b = await Promise.resolve('yyy'); // string
    console.log('🚀  a:', a, b);
    return a;
    }

(async () => {
    const gg = await gf(Promise.resolve('xxx'));
    console.log('🚀  gg:', typeof gg);
})();

type User = {id: number; name: string, age: number};
type PartialUser2 = Partial<User> & {name: string, agee : number}; // name만 필수!


type Person = {
    name: string;
    age: number;
    email: string;
};
const p2: Partial<Person> = {
    name: 'hong'
};
console.log(p2);