console.log("***** 1번 문제 *****")
console.log("--------------------")

const arr = [100, 200, 300, 400, 500, 600, 700];

for(k in arr){
    console.log(k);
}

console.log("***** 2번 문제 *****")
console.log("--------------------")
for(k in arr){
    console.log(arr[k]);
}

console.log("***** 3번 문제 *****")
console.log("--------------------")
const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }

for(k in obj){
    console.log(k);
}

console.log("***** 4번 문제 *****")
console.log("--------------------")
for(k in obj){
    console.log(obj[k]);
}

console.log("***** 5번 문제 *****")
console.log("--------------------")
const values = Object.values(obj);
for(v of values){
    console.log(v);
}

console.log("***** 6번 문제 *****")
console.log("--------------------")
Object.defineProperty(obj, 'level', {value : 1, enumerable : false});
console.log(obj);

console.log("***** 7번 문제 *****")
console.log("--------------------")
Object.defineProperty(obj, 'role', {writable : false});
console.log(Object.getOwnPropertyDescriptor(obj, 'role'));
console.log(Object.getOwnPropertyDescriptors(obj));

// 정답
Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'role'));
console.log(Object.getOwnPropertyDescriptors(obj));



console.log("***** 8번 문제 *****")
console.log("--------------------")
const data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
const obj2 = {};

function makeObjectFromArray(arr){
    let obj = {}
    for(const [k, ...v] of arr){
        obj[k] = v;
        // obj = {...obj, [k]:v};
    }
    return obj;
}
console.log(makeObjectFromArray(data));


console.log("***** 9번 문제 *****")
console.log("--------------------")
dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

function makeArrayFromObject(obj){
    let arr = [];
    // 내가 쓴 답
    // let idx = 0;
    // for(k2 in obj){
    //     arr[idx] = [k2, ...obj[k2]];
    //     idx += 1;
    // }

    // 정답
    for(const [k,v] of Object.entries(obj)){
        // arr.push([k, ...v]);
        arr = [...arr, [k, ...v]];
    }
    return arr;
}
console.log(makeArrayFromObject(dataObj));

console.log("***** 10번 문제 *****")
console.log("--------------------")
const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};

function shallowCopy(obj, newObj = {}){
    for(k in obj){
        newObj[k] = obj[k];
    }
    return newObj;
}
// const newKim1 = shallowCopy(kim);
const newKim1 = Object.assign({}, kim);
// const newKim1 = {...kim};
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr); // true면 통과!

console.log("***** 11번 문제 *****")
console.log("--------------------")
const kim2 = {nid: 3, nm: 'Kim', addr: {city: 'Pusan', road: 'Haeundaero', zip: null, detail :{dong : 101, "Ho" : 101} }};

function deepCopy(obj){
    const newObj = {}
    // 내가 푼 풀이
    // for(k in obj){
    //     const tmp = {}
    //     for(k2 in obj[k]){
    //         tmp[k2] = obj[k][k2];
    //     }
    //     newObj[k] = tmp;
    // }

    // 정답
    for(const [k,v] of Object.entries(obj)){
        // 첫번쨰 풀이
        if(v != null && typeof v == 'object'){
            newObj[k] = {...v};
        }
        else{
            newObj[k] = v;
        }

    }
    return newObj;
}

const newKim2 = deepCopy(kim2); 
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!


// console.log("***** 12번 문제 *****")
// console.log("--------------------")
// globalThis.name = "Global";
// this.name = "ModuleName";

// const dog = {
//     name: 'Maxx',
//     showMyName() {
        
//         console.log(`My name is ${this.name}.`);
//     },
//     whatsYourName() {
//         // 첫번째 방법
//         setTimeout(this.showMyName.bind(this), 1000);

//         // 두번째 방법
//         setTimeout(() => {
//             console.log(this);
//             this.showMyName();
//         }, 1000);
//     }
// };
// // console.log(this);
// dog.whatsYourName();


// const week = (weekNo) => {
//     const weeks = ['일', '월', '화', '수', '목', '금', '토'];
//     return weeks[weekNo];
// }

// const getWeekName = week;

// const day = new Date().getDay();
// console.log(`오늘은 ${getWeekName(day)}입니다!`);


console.log("***** 13번 문제 *****")
console.log("--------------------")
const once = (cb) => {
    let done;
    return (...args) => {
        if(done) {
            return;
        }
        else {
            done = true;
            return cb(...args);
        }
    };
}
// const onceAgain = 

// const fn2 = onceAgain((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`, 100);
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
// console.log(fn2()(1, 6));
// return ;

console.log("***** 14번 문제 *****")
console.log("--------------------")
const before = () => console.log('before....');
const after = (result) => console.log('after...', result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) => `${id}/${nickname}/${email}/${level}`;

const template = (f) => {
    let timer;
    return (...arg) => {
        before();
        
        // 내꺼
        // timer = setTimeout(() => {
        //     after(f(...arg));
        //     timer = null;
        // }, 100);
        // return f(...arg);

        // 정답
        const result = f(...arg);
        setImmediate(after, result);
        return result;
    }

}

const temp = template(someFn);  // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

console.log('temp1>>', temp('sico', 'hello'));
console.log('temp2>>', temp2(1, 'sico', 'sico@gmail.com', 5));

console.log("***** 15번 문제 *****")
console.log("--------------------")

// 내꺼
// const getNextWeek = (widx) => {
//     const weeks = ['일', '월', '화', '수', '목', '금', '토'];
//     if (widx >= weeks.length) widx = 0;

//     return `${weeks[widx]}요일`;
// };

// let cnt = 0;
// const intl = setInterval(() => {
// //   widx += 2; // side-effect!
//   console.log('call', cnt, getNextWeek(cnt));
//   if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

//정답
const getNextWeek = (() => {
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];
    let widx = -1;
    return () => `${weeks[++widx]}요일`;
})();

let cnt = 0;
const intl = setInterval(() => {
//   widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 1000);