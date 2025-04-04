console.log("========================");
console.log("연습문제 1");
for(let i=1; i<=10; i++){
    if(Math.sqrt(i) % 1 != 0){
        console.log(Math.sqrt(i).toFixed(3));
    }
}

console.log("========================");
console.log("연습문제 2");
const day = new Date();
const WEEK_NAMES = '일월화수목금토'
console.log("오늘은 " + WEEK_NAMES[day.getDay()]+"요일입니다.")

console.log("========================");
console.log("연습문제 3");
function addPoints(a, b) {
    const a_arr = a.toString().split('.');
    const a_len = a_arr[a_arr.length -1].length;

    const b_arr = b.toString().split('.');
    const b_len = b_arr[b_arr.length -1].length;

    const fixed = (a_len < b_len) ? b_len : a_len;
    console.log((a+b).toFixed(fixed));

}
addPoints(0.21354, 0.1) // 0.31354
addPoints(0.14, 0.28) // 0.42
addPoints(0.34, 0.226) // 0.566
addPoints(10.34, 200.226) // 210.566
addPoints(0.143, -10.28) // -10.137
addPoints(0.143, -10) // -9.857