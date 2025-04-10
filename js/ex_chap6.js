console.log("====================")
console.log("연습문제 1")

const user1 = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
const lee = {id: 2, name: 'Lee'};
function f1(user){
    const {id : id, name : name} = user;
    console.log(id , name);
}

function f2({id, name}){
    console.log(id ,name);
}

f1(user1);
f2(lee);


console.log("====================")
console.log("연습문제 2")
const user2 = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}

// 내가 작성한 코드
// const {id : id, name : name, addr : addr} = user2;
// const userInfo = {id, name, addr};

// 정답 코드
const {passwd, ...userInfo} = user2;

console.log(userInfo);


console.log("====================")
console.log("연습문제 3")
const arr = [[{id: 1}],[{id:2}, {id: 3}]];

// 내가 작성한 코드
// const [[{id : id1},], [{id : id2}, {id : id3}]] = arr;

// 정답 코드
const [[{id: id1}],[{id:id2}, {id: id3}]] = arr
console.log(id1, id2, id3);


console.log("====================")
console.log("연습문제 4")
const user3 = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};

function getUserValueExceptInitial(k) {
    // 내가 작성한 코드
    // const val = user3[k];
    // const [ , ...arr] = val;
    // return arr.join('');

    // 정답 코드
    const {[k] : val} = user3;
    const [ , ...arr] = val;
    return arr.join('');

}


console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'