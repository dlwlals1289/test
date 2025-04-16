// const readline = require('readline');
// const {stdin : input, stdout : output} = require('process');
// const r1 = readline.createInterface({input, output});
// console.log('\n'.repeat(2));

// const gener1 = add();
// const {value} = gener1.next();

// r1.on('line', answer => {
//     console.log('line.answer => ', answer);
//     const {value, done} = gener1.next(Number(answer));
//     if(done) {
//         console.log('Total is ', value);
//         r1.close();
//     }
//     else{
//         console.log(value);
//     }
// }).on('close', ()=>{
//     process.exit();
// });

// function* add(){
//     const a = yield 'first number?';
//     const b = yield 'second number?';
//     return a + b;
// }

const LINE2 = [
    '신도림',
    '성수',
    '신설동',
    '용두',
    '신답',
    '용답',
    '시청',
    '충정로',
    '아현',
    '이대',
    '신촌',
    '공항철도',
    '홍대입구',
    '합정',
    '당산',
    '영등포구청',
    '문래',
    '대림',
    '구로디지털단지',
    '신대방',
    '신림',
    '봉천',
    '서울대입구',
    '낙성대',
    '사당',
    '방배',
    '서초',
    '교대',
    '강남',
    '역삼',
    '선릉',
    '삼성',
    '종합운동장',
    '신천',
    '잠실',
    '잠실나루',
    '강변',
    '구의',
    '건대입구',
    '뚝섬',
    '한양대',
    '왕십리',
    '상왕십리',
    '신당',
    '동대문역사문화공원',
    '을지로4가',
    '을지로3가',
    '을지로입구'
]
  
class Subway {
    #start;
    #end;
    #currIdx=0;
    #didEnd = false;

    constructor(start, end){
        this.#start = start;
        this.#end = end;
        this.#currIdx = LINE2.indexOf(start);
    }
    // 내 코드 - iterator
    // [Symbol.iterator] (){
    //     let idx = 0;
    //     const startIdx = LINE2.indexOf(this.#start);
    //     const endIdx = LINE2.indexOf(this.#end);

    //     const route = (startIdx <= endIdx) 
    //     ? LINE2.slice(startIdx, endIdx+1) 
    //     : LINE2.slice(startIdx).concat(LINE2.slice(0,endIdx+1));
                
    //     return {
    //         next() {
    //             return { value: route[idx++],
    //                     done: idx > route.length };
    //         }
    //     };
    // }
    nextStation(){
        if(this.#currIdx == LINE2.length){
            this.#currIdx = 0;
        }
        this.#didEnd = (this.#currIdx === (LINE2.indexOf(this.#end)));
        return LINE2[this.#currIdx++];
    }
    *[Symbol.iterator]() {
        while(true){
            if(this.#didEnd){
                this.#currIdx = LINE2.indexOf(this.#start);
                break;
            }

            yield this.nextStation();
        }
    }
    iterator(){
        return this[Symbol.iterator]();
    }
}


const routes = new Subway('문래', '신림');
// const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
for(const s of routes.iterator()){
    console.log("🚀 ~ s:", s)
}
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '대림', done: false }
// console.log(it1.next()); // { value: '구로디지털단지', done: false }
// console.log(it1.next()); // { value: '신대방', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }

console.log("----------------------");
const routes2 = new Subway('구로디지털단지', '성수');  // 32개 정거장
console.log([...routes2].length); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
//   console.log(x);
  if (x.done) break;
}

const routes3 = new Subway('문래', '합정');  // 46개 정거장이면 통과!
console.log([...routes3].length)
const routes4 = new Subway('신도림', '을지로입구'); // 48개 정거장이면 통과!
console.log([...routes4].length)