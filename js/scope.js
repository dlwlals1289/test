// function varFn() {
//     var v = 1;
//     {
//         var v = 2, vv = 3;
//         console.log(v, vv, xx); // 2, 3
//     }
//     console.log(v, vv); // 2, 3
// }

// letFn();
    
// function letFn() {
//     let l = 1;
//     {
//     let l = 2, ll = 3;
//     console.log(l, ll); // 2, 3
//     }
//     // console.log(l, ll); // ReferenceError: ll is not defined
// }

// var xx = 9;
// varFn();
'use strict'
var gg = 1;
let bb = 2;
function f1(x,y) {  
  var gg = 11;   
  let bb = 22;
  console.log('f1>', gg, bb, zz, f2, f2.length); 
  f2('first'); 
  {
    const xx = 99; 
    f2('nest-first'); 
    var zz = 88;   
    function f2(t){
        console.log(t, '**nested f2**', xx, zz)
    }
    let lll = 0;   
  }  
  function f2(t, u) { 
    console.log(t, 'inner', xx, zz); 
  }  
  function f2(t, u, v) { 
    console.log(t, 'inner2', xx, zz); 
  } 
  var zz = 800;
  f2('second');  
}
function f2(g) {
  console.log(g, 'global f2>', gg, bb, xx, kk); 
}
let xx = 9;
if (gg > 0) { var kk = 33; const yy = 9; }
f1(1,2);   
// console.log(kk, yy);
f2('third');  