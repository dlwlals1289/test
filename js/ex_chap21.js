// class Promise {
//     constructor(nbfn){
//         nbfn(this.runSuccess.bind(this), this.runFail.bind(this));
//     }

//     runSuccess(ret){
//         this.thenFn(ret);
//     }

//     runFail(err){
//         console.log("err >>", err);
//         // console.log('depth'.concat(err), new Date());
//         // console.log('depth'.concat(ret), new Date());  
//         this.catchFn(err);
//     }

//     then(f){
//         // console.log(f);
//         this.thenFn = f;
//         return this;
//     }

//     catch(errFn){
//         this.catchFn = errFn;
//     }
// }
  
// const depthTimer = (depth) => {

//     return new Promise(
//     (resolve) => setTimeout(() => {
//         console.log('depth'.concat(depth), new Date());
//         resolve(depth+1);
//     }, depth*1000));
//         // if(depth <= 3) setTimeout(resolve, 1000*depth, depth+1);
//         // else setTimeout(reject, 1000*(depth), depth);
    
// };
// console.log('START!', new Date());
// // depthTimer(1)
// // .then(depthTimer)
// // .then(depthTimer)
// // .catch(err => console.log(err));
// let r = 1;
// while(r<=3){
//     r = await depthTimer(r);
// }

console.log("--------------------------");
import assert from 'assert';
import { resolve } from 'path';
const vals = [1,2,3];
const randTime = (value) => new Promise((resolve => {
    setTimeout(resolve, Math.random()*1000, value);
}))
const promiseAll = (promises) => new Promise(
    (resolve, reject) => {
        const results = [];
        let runCnt=0;
        for(let i=0; i<promises.length; i++){
            promises[i].then(
                res => {
                    results[i] = res;
                    runCnt += 1;
                    if(promises.length == runCnt) resolve(results);
            }).catch(reject);
        }
})
promiseAll([randTime(1), randTime(2), randTime(3)]).then(arr => {
  console.table(arr);
  assert.deepStrictEqual(arr, vals);
}).catch(console.error);

Promise.all([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
    console.log('여긴 과연 호출될까?!');
    })
    .catch(error => {
    console.log('reject!!!!!!>>', error);
});

console.log("---------------------");

const allSettledResults = [
    {
        status: 'fulfilled',
        value: 11,
    },
    {
        status: 'rejected',
        reason: 'RRR',
    },
    {
        status: 'fulfilled',
        value: 33,
    },
];
// const promiseAllSettled = (arr) => Promise.allSettled(arr);
const promiseAllSettled = (promises) => new Promise(
        (resolve, reject)=>{
            const results = [];
            let runCnt = 0 ;
            for(let i=0; i<promises.length; i++){
                promises[i].then(
                    value => {
                        const status = "fulfilled";
                        results[i] = {status, value};
                    }
                ).catch(reason => {
                    const status = "rejected";
                    results[i] = {status, reason};
                }).finally(() => {
                    runCnt += 1;
                    if(promises.length === runCnt) resolve(results);
                })}
            })

promiseAllSettled([randTime(11), Promise.reject('RRR'), randTime(33)])
 .then(array => {
   console.table(array);
   // console.log(JSON.stringify(array, null, '  '));
   console.log('여긴 과연 호출될까?!');
   assert.deepStrictEqual(array, allSettledResults);
 })
 .catch(error => {
   console.log('reject!!!!!!>>', error);
 });
