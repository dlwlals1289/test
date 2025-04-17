const assert = require('assert');
function telfmt(str) {
    const len = str.length ?? 0;
    const num = [];
    const idx = (str.substring(0,2) == '02') ? 2 : 3;

    if(len < 8) return str;
    if(len % 4 == 0){ // 0507 - , 1577 -
        for(let i =0; i<len/4; i++){
            num.push(str.substring(4*i, 4*(i+1)));
        }
    }else{ // 010 - , 02 - , 031 - , 033 -
        num.push(str.substring(0,idx),str.substring(idx,len-4),str.substring(len-4,len));
    }

    return num.join('-');
}
const telfmt2 = telno => {
    const len = telno?.length ?? 0;
    if (len <= 7) return telno;

    if (len === 8) return `${telno.substring(0, 4)}-${telno.substring(4)}`;

    let a = telno.startsWith('02') ? 2 : len > 10 ? len - 8 : 3;
    let b = len - a - 4;
    const reg = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{4})`);
    return telno.replace(reg, '$1-$2-$3');
};

assert.deepStrictEqual(telfmt('0704570'), '0704570');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');

//*
// 02-123-4567
// 031, 062, 033
// 010
//  */