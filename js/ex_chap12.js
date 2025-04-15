const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
console.log(arr2.slice(1,3));

// ex2) [3]부터 모두 다 추출
console.log(arr2.slice(2))

// ex3) [2,3,4] 제거하기
const del1 = arr2.splice(1,3)
console.log(arr2);

// ex4) 복원하기
arr2.splice(1,0,...del1)
console.log(arr2);

// ex5) [3] 부터 끝까지 제거하기
const del2 = arr2.splice(2);
console.log(arr2);

// ex6) 복원하기
arr2.splice(2,0, ...del2);
console.log(arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
const tmp1 = ['X', 'Y', 'Z', 4, 5];
arr2.splice(2, 3, ...tmp1);
console.log(arr2);

// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const tmp2 = ['X', 'Y', 'Z'];
arr2.splice(2,3,3);
console.log(arr2);
arr2.splice(2, 1, ...tmp2);
console.log(arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
arr2.splice(2,3,3);
const lenAdd = tmp2.length;
const start = arr2.slice(0,2);
const end = arr2.slice(3);

const ar7 = [...start, ...tmp2, ...end];
console.log(ar7);

const str = "abcde";
console.log(...str);

console.log([[1,2],[1,[2,[3,[4,[5]]]]]].flat(3));

const rs1 = arr2.reduce((s,a) => s += (a**2));
console.log(rs1);

const assert = require('assert');
console.log("----------------------")
console.log("******** p159 ********")
function push (arr, ...args){
    return [...arr, ...args];
}
function pop (arr, cnt){
    return !cnt ? arr[arr.length-1] : arr.toSpliced(0,arr.length-cnt);
}
const shift = (arr, cnt=1) => {return [arr.toSpliced(cnt), arr.toSpliced(0,cnt)]};
const unshift = (arr, ...args) => {return [...args, ...arr]};
const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]); 
assert.deepStrictEqual(pop(arr), 4); 
assert.deepStrictEqual(pop(arr, 2), [3, 4]);
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); 
assert.deepStrictEqual(shift(arr, 2), [[1, 2], [3, 4]]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]); 

console.log("----------------------")
console.log("******** p160 ********")
const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

const deleteArray = (arr, start, end=arr.length) => {
    if(typeof start == 'number') return arr.toSpliced(start, end-start);
    return arr.toSpliced(arr.indexOf(arr.find(a => a[start] == end)),1);
    
};
/** 정답 코드
 * const deleteArray = (arr, startOrKey, endOrValue) => {
 *  if(typeof startOrKey == 'string'){
 *      return array.filter(a => a[startOrKey] != endOrValue)
 *  }
    return arr.filter((_,i) => i < startOrKey || i > endOrValue);
    };
**/
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);    
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); 
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);

console.log("----------------------")
console.log("******** p161 ********")
const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users2 = [kim, lee, park];

const addUser = (user) => {return [...users2, user]};
// 내 코드
// const removeUser = (user) => {return users2.filter((u) => u != user)};
// 정답코드
const removeUser = ({id : pid}) => {return users2.filter(({id}) => id != pid)};

// 내 코드
// const changeUser = (user1, user2) => {return users2.with(users2.indexOf(user1), user2)};

const changeUser = ({id : fromId}, to) => {
    return users2.map(user => (user.id == fromId ? to : user));
};

assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users2, [kim, lee, park]);

console.log("----------------------")
console.log("******** p162 ********")
// ex1) 배열의 각 원소를 String으로 변환하시오.
const arr3 = [1, 2, 3, true];
// const ret1 = arr3.map(a => a.toString());
// 정답 코드
const ret1 = arr3.map(String);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => {
    let result = '';
    // return args.filter((a) => a != '').join(' ');
    return args.filter(Boolean).join(' ');
}; 
const ret2 = classNames('', 'a b c', 'd', '', 'e',undefined, null); 
assert.strictEqual(ret2, 'a b c d e'); 

console.log("----------------------")
console.log("******** p163 ********")
const reduce = (arr, fn, initValue) => {
    let i = 0;
    let acc = initValue ?? (i++, arr[0]);

    for(; i<arr.length; i++){
        acc = fn(acc, arr[i], i, arr);
    }
    
    return acc;
}
assert.strictEqual(reduce([1, 2, 3], (a, b) => a + b, 0), 6);       // 6이면 통과!
assert.strictEqual(reduce([1, 2, 3, 4, 5], (a, b) => a + b),15);    // 15면 통과!
assert.strictEqual(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),  120); // 120이면 통과!
assert.strictEqual(reduce([2, 2, 2], (a, b) => a * b), 8);          // 8이면 통과!
assert.strictEqual(reduce([3, 3, 3], (a, b) => a * b, 0), 0);       // 0이면 통과!

console.log("----------------------")
console.log("******** p164 ********")
const arr4 = [1, 2, 3, 4, 5];
const square = a => a ** 2;
const sqrt = a => Math.sqrt(a);
const cube = a => a ** 3;


const rs2 = arr4.map(a => [square, sqrt, cube].reduce((acc,fn) => fn(acc), a));
const rs3 = arr4.map(a => [cube, square, sqrt].reduce((acc,fn) => fn(acc), a));
const rs4 = arr4.map(a =>
    [square, cube, n => n + 1].reduce((acc, fn) => fn(acc), a)
  );
  
console.log(rs2);
console.log(rs3);
console.log(rs4);

console.log("----------------------")
console.log("******** p165 ********")
const range = (s, e, step) => {
    // 내 코드
    // if(step == undefined) step = s > e ? -1 : 1;
    // if(step === 0 || s === e) return [s];
    // if(e == undefined){
    //     e = (s > 0) ? s : -1;
    //     s = (s > 0) ? 1 : s;

    //     if(s === 0) return [0];
    // }
    // if (((s - e) * step) > 0) return [];

    // let len = (e>s) ? ((e-s+1)/Math.abs(step)) : ((s-e+1)/Math.abs(step));
    // len = (len >= 1) ? len : 1 ;
    // return Array.from({length:len}, (_, i) => s + step*i);

    // 정답 코드
    if(step === 0 || s === e) return [s];
    if(((s - e) * step) > 0) return []

    // version 1 -> 비추천
    // if(e == undefined){
    //     if(s>0){
    //         e = s;
    //         s = 1;
    //     } else if(s <0){
    //         e = -1
    //     } else {
    //         return [0]
    //     }
    // }

    // version 2 -> 간단
    if(e == undefined && s == 0) return [0];
    const t = s;
    e = e ?? (s > 0 ? ((s = 1), t) : -1);

    const results = []
    for(let i = s; s > e ? i >= e : i <= e; i += step){
        results.push(i);
    }

    return results;
}
console.log(range(1, 5, 0));   // [1]
console.log(range(2, 1, -5));  // [2]     
console.log(range(1, 5, 6));   // [1]                  
console.log(range(0, -1, -5)); // [0]     
console.log(range(1, 10, 1));  // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));  // [1, 3, 5, 7, 9]
console.log(range(1, 10));     // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(10, 1));     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
console.log(range(5));         // [1, 2, 3, 4, 5] 
console.log(range(100));       // [1, 2, 3, 4, 5, …, 99, 100] 
console.log(range(-5));        // [-5, -4, -3, -2, -1]
console.log(range(5, 5));      // [5]                  
console.log(range(5, 5, 0));   // [5]                  
console.log(range(5, 5, -1));  // [5]                  
console.log(range(5, 1, 1));   // []                   
console.log(range(1, 5, -1));  // []                   
console.log(range(0));         // [0]          
console.log(range(0, 5));      // [0, 1, 2, 3, 4, 5]
console.log(range(0, -1));     // [0, -1]
console.log(range(0, -3));     // [0, -1, -2, -3]
console.log(range(-3, 0));     // [-3, -2, -1, 0]
console.log(range(5, 1));      // [5, 4, 3, 2, 1]
console.log(range(0, 0));      // [0] 
console.log(range(0, 0, 5));   // [0]


console.log("----------------------")
console.log("******** p166 ********")

const keyPair = (arr, sum) => {
    const result = {};
    const tmp = [];

    for(let i=0; i< arr.length; i++){
        const val = arr[i];
        if(result[val]) return [result[val], i];
        result[sum - val] = i;
    }
    
    return result;
}
console.log(keyPair([1, 3, 4, 5], 7));
console.log(keyPair([1, 4, 45, 6, 10, 8], 16));
console.log(keyPair([1, 2, 4, 3, 6], 10));
console.log(keyPair([1, 2, 3, 4, 5, 7], 9));