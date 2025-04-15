function* add () {
    const a = yield "첫번째 정수는?";
    const b = yield "두번째 정수는?";
    return a+b;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);

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
    start;
    end;

    constructor(start, end){
        this.start = start;
        this.end = end;
    }
    [Symbol.iterator] (){
        let idx = 0;
        const startIdx = LINE2.indexOf(this.start);
        const endIdx = LINE2.indexOf(this.end);

        const route = (startIdx <= endIdx) 
        ? LINE2.slice(startIdx, endIdx+1) 
        : LINE2.slice(startIdx).concat(LINE2.slice(0,endIdx+1));
                
        return {
            next() {
                return { value: route[idx++],
                        done: idx > route.length };
            }
        };
    }
}

const routes = new Subway('문래', '신림');
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '대림', done: false }
console.log(it1.next()); // { value: '구로디지털단지', done: false }
console.log(it1.next()); // { value: '신대방', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }

console.log("----------------------");
const routes2 = new Subway('구로디지털단지', '성수');  // 32개 정거장
console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}

const routes3 = new Subway('문래', '합정');  // 46개 정거장이면 통과!
console.log([...routes3].length)
const routes4 = new Subway('신도림', '을지로입구'); // 48개 정거장이면 통과!
console.log([...routes4].length)