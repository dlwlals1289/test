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

function addPoints2(a, b){
    const p = 10 ** 15;
    const ai = a * p;
    const bi = b * p;

    const ret = (ai + bi) / p;
    console.log(ret)
}

function addPoints3(...arg) {
    const p = 10 ** 15;
    let ret = 0;
    for(const n of arg){
        ret += Math.trunc(n*p);
    }
    ret /= p;
    console.log(ret);
}

function plength(n){
    return n.toString().length - Math.trunc(n).toString().length - 1;
}
function cal(op, ...arg){
    let len = plength(arg[0]);
    let sum = arg[0];

    const operator = (op == '+') ? +1 : -1;
    for(let i = 1; i<arg.length; i++){
        // console.log("now : " + len);
        len = Math.max(len, plength(arg[i]));
        sum += (operator)*arg[i];
    }
    sum = sum.toFixed(len);
    console.log(sum);
}
cal('+', 0.21354, 0.1);
cal('-', 0.21354, 0.1);
cal('+', 0.14, 0.28);
cal('-', 0.14, 0.28);
cal('-', 10.34, 200.226);

// addPoints2(0.21354, 0.1) // 0.31354
// addPoints3(0.14, 0.28) // 0.42
// addPoints2(0.34, 0.226) // 0.566
// addPoints3(10.34, 200.226) // 210.566
// addPoints2(0.143, -10.28) // -10.137
// addPoints3(0.143, -10) // -9.857