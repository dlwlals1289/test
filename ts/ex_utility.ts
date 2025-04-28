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

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type CombineExclude<T, U, V> = {
  // 내 코드
  // [k in Exclude<keyof (T & U), V>]: k extends keyof (T | U) ? T[k] | U[k] : (T & U)[k];
  [k in Exclude<keyof Combine<T, U>, V>]: Combine<T, U>[k];
};

type ICombineExclude = CombineExclude<IUser, IDept, 'name' | 'dname'>;
let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: 'adf',
};

console.log('-------------------------------');
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[number];
const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);

console.log('-------------------------------');
const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(cb: T, delay: number = 1) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<typeof cb>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = <T extends unknown[]>(cb: (...args: T) => any, delay: number = 1) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<typeof cb>) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// // test
// const debo = debounce((a: number, b: string) => console.log(a + 1, b), 1000);
// for (let i = 10; i < 15; i++) debo(i, 'abc'); // 15, 'abc'

// const thro = throttle((a: number) => console.log(a + 1), 1000);
// for (let i = 10; i < 15; i++) thro(i); // 11

console.log('-------------------------------');
function memoized<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) {
  // function memoized<T>(fn: (...args: T[]) => any) {
  const cache: Record<string, any> = {};

  return function (...args: Parameters<typeof fn>) {
    const k = [...args].sort().join();
    return k in cache ? cache[k] : (cache[k] = fn(...args));
  };
}

// test
const memoizeAdd = memoized((a: number, b: number) => {
  return a + b;
});
const memoizeFactorial = memoized((n: number): number => {
  if (n <= 1) return 1;

  return n * memoizeFactorial(n - 1);
});

console.log(memoizeAdd(1, 2)); // 3
console.log(memoizeAdd(3, 4)); // 7
console.log(memoizeFactorial(5)); // 120
