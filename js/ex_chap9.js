function makeArray(n, arr = []){
    if(n===1) return [1, ...arr];
    return makeArray(n-1, [n, ...arr]);
}

function makeReverseArray(n){
    if(n===1) return [1];
    return [n, ...makeReverseArray(n-1)];
}

const makeArrayTCO = makeArray(10);
const makeReverse = makeReverseArray(10);
console.log(makeArrayTCO);
console.log("🚀 ~ makeReverse:", makeReverse)

// 피보나치 수열
function loopFibonacci(n){
    if(n<=1) return n;
    let prev = 0;
    let curr = 1;
    for(let i = 2; i<=n; i++){
        // let t = prev;
        // prev = curr;
        // curr = t + curr;
        [prev, curr] = [curr, prev+curr];
    }

    return curr;
}

function recurFibo(n){
    if(n<=1) return n;
    return recurFibo(n-2) + recurFibo(n-1);
}
function memoized(fn){
    const cache = [];
    return function (n) {
        return cache[n] || (cache[n] = fn(n));
    };
}
const memoFibo = memoized(function (n){
    if(n<=1) return n;
    return memoFibo(n-2) + memoFibo(n-1);
})
// console.log("🚀 ~ loopFibonacci:", loopFibonacci(3))
// console.log("🚀 ~ loopFibonacci:", loopFibonacci(5))
// console.log("🚀 ~ loopFibonacci:", loopFibonacci(7))

console.log("🚀 ~ recurFibo:", recurFibo(3));
console.log("🚀 ~ recurFibo:", recurFibo(5));
console.log("🚀 ~ recurFibo:", recurFibo(7));

console.log("🚀 ~ memoFibo:", memoFibo(3));
console.log("🚀 ~ memoFibo:", memoFibo(5));
console.log("🚀 ~ memoFibo:", memoFibo(7));
