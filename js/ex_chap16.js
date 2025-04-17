console.log("----------------------")
console.log("******** 연습1 ********")
// const d1 = new Date(1970,0,1,0,0,0);
const d1 = new Date();
d1.setTime(0);
const tmp = d1.getTime();
d1.setDate(2);
console.log((d1.getTime()-tmp)/1000);

console.log("----------------------")
console.log("******** 연습2 ********")
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
// 중복안됨, 2025-04-25, 2025-04-07
const today = new Date();
today.setMonth(today.getMonth() + 1);
today.setDate(0);
const endOfDay = today.getDate();
console.log('🚀 today:', today, endOfDay);

const days = [];
do {
  const r = rand(1, endOfDay);
  if (!days.includes(r)) days.push(r);
} while (days.length < 5);

console.log('🚀 days:', days);
const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2, 0);
console.log(today, today.getMonth());

const rets = days
  .sort((a, b) => (a < b ? 1 : -1))
  .map(day => `${yyyy}-${mm}-${day.toString().padStart(2, 0)}`);
console.log(rets);

console.log("----------------------")
console.log("******** 연습3 ********")
const today2 = new Date();
const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

console.log(today2.getDay());
today2.setFullYear(today2.getFullYear()+1);

console.log(weekDay[today2.getDay()].concat("요일입니다."));


console.log("----------------------")
console.log("******** 연습4 ********")
const today3 = new Date();
const tmp2 = today3.getDate();
console.log("🚀 ~ tmp2:", tmp2)

today3.setDate(today3.getDate()+100);
console.log(today3);
// 26 + 30 + 31 + 13 = 100