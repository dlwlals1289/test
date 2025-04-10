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