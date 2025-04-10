// const u = { id: 1, name : 'Hong', age : 29 }
// const m = { id: 2, name : 'Kim', age : 22 }

// let id, name;
// ({id, name} = m);
// console.log(u.id);
// console.log(name);

// const arr = [1, 2,3,4,5]
// let [a, b, ...c]  = arr;
// console.log(a + " " + b);

// [a, b] = [b, a]; // swap
// console.log(a + " " + b);

// const [ i, j, k = 3 ] = [ 1, 2 ];
// console.log("🚀 ~ i:", i)
// console.log("🚀 ~ j:", j)
// console.log("🚀 ~ k:", k)


// const user = { id: 1, name: 'Hong', addr: { city: 'Seoul', road: '길' } };
// const id = user.id;
// const { id: id } = user; 
// const { id } = user;
// console.log("🚀 ~ id:", id)

// const { id: userId, name: userName } = user; 
// const { id, addr: { city: addrCity } } = user; 
// console.log("🚀 ~ addrCity:", addrCity)
// console.log(userId, userName);

// const users = [{ id: 1, name: 'Hong'}, {id: 2, name: 'Kim'}, {id: 3, name: 'Lee'}];
// const [user, ] = users; // user = ?
// console.log("🚀 ~ user:", user)
// const { id, name, addr = 'Seoul' } = { id: 1, name: 'Hong' }; // addr = ?
// console.log("🚀 ~ addr:", addr)
// const [ a, b, c = 3 ] = [ 1, 2 ]; // a = ?, b = ?, c = ?
// console.log("🚀 ~ a:", a)
// console.log("🚀 ~ b:", b)

// const obj = {i: 1, j: 2, l: 3, m: 4, n: 5};
// let n;
// let { j, i, k = i * j * n } = obj; 
// console.log("🚀 ~ j:", j)
// // let { k = i * 10, i, j } = obj; 
// console.log("🚀 ~ k:", k)

// const users = [{ id: 1, name: 'Hong'}, {id: 2, name: 'Kim'}, {id: 3, name: 'Lee'}];
// const [user, ] = users; // user = ?
// const user2 = {...user, name: '홍길동'} 
// console.log("🚀 ~ user2:", user2)

const {name:n, age = 30} = {name: 'Lee'}; // n = ?, age = ?
const {age2 = 30} = {name: 'Park', age2: 20}; // age2 = ?
const fn = ({age}) => age; // 
user = {id: 1, name: 'P', age: 33}
// age2 = 20, age3 = ?
// ⇐⇒ function fn({age}) { return age; }
const {age2:age3 = fn(user)} = {age22: 20}; 
console.log("🚀 ~ age2:", age2)
console.log("🚀 ~ age3:", age3)
