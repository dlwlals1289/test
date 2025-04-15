let arr = [1,2,3]
const ar2 = Array(1,2,3)
console.log(ar2 == arr);

const ar3 = Array.from(arr); // no-ref
console.log(ar3.shift());
const ar4 = Array.from([...arr, 4, 5]);
console.log(Array.of(1,2));
console.log(ar4);

console.log(Array.from({length:5}, (n, i)=> i + 1));

const ar5 = [undefined, null];
console.log(ar5.length);

const queue = [];
queue.unshift(1); // q = [1, ...queue]
queue.unshift(2,3); // [2,3, ...queue]
console.log(queue);

const ar6 = [1, 2, 3, 2, 3];
console.log(ar6.includes(1,1));
console.log(ar6.includes(1,0));

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [hong, kim, lee, park];

const find3 = a => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log(idxId2);

console.log("------------------")
// Try this: id를 부여해서 실행하는 findId 함수를 작성하시오.
const findId = (pid) => (a) => a.id === pid;
const idxId11 = users.findLastIndex(findId(3));
const idxId12 = users.findLastIndex((a) => a.id === 2);
console.log('🚀  idxId11:', idxId11);
console.log("🚀 ~ idxId12:", idxId12)

sum = 10;
// const ids = users.map((a) => {return a.id + sum});
// console.log(ids);
// Array.prototype.push = function (a) {
//     console.log("our push", a.id);
//     return [...this, a];
// }
users.push({id : 4, name : "choi"});
users.push({id : 5, name : "jung"});
users.push({id : 6, name : "im"});

Array.prototype.map = function (f){
    const results = [];
    for(let i=0; i<this.length; i++){
        results[i] = f(this[i], i, this);
        console.log(`🚀 ~ result${i}:`, results[i]);
    }
    return results;
}
const ids1 = users.map( a => a.id );
console.log("🚀 ~ ids:", ids1)

Array.prototype.mapBy = function(k) {
    const results = [];
    for (let i =0; i<this.length; i++){
        results.push[i][k];
    }
    return results;
}

console.log(arr.with(1,200));
console.log(arr);

// console.log(users.map(a => a.id).join(','));
// console.log(arr.map(a => a.toString()));

const a = [1, 2, 3, 4, 5, 6, 7];
console.log(a);

a.splice(1,0, 10, 11, 12 );
console.log(a);

console.log(users);
console.log(users.reduce((acc, a) => `${acc}${acc?' ':''}${a.name}`, ''));

const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];
console.log(objs.reduce((a,c) => Object.assign(a,c), {}));
