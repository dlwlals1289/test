const bounce = (cb, delay) => { // currying
    let timer;
    return (...arg) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...arg);
    };
}

const throttle = (cb, delay) => {
    if(timer) return;
    return (...arg) => {
        timer = setTimeout(() => {
            cb(...arg);
            timer = null;
        }, delay);
    };
}

console.log(parseInt.length);
console.log(Math.max.length);

function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);
  
    // const getTime1  = d1.getTime();
    // const getTime2  = d2.getTime();

    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;

    return getTime1.apply(d1) - getTime2.apply(d2);
}
console.log(getDiffMillis('2021-01-01', '2021-01-02'));



class Dog {
    constructor(name) {
      this.name = name;
    }
  
  
    getName() {
      return this.name;
    }
  
    fn() {
      return 'FN';
    }
  
    static sfn() {  // Dog.sfn
      return 'SFN';
    }
}
const lucy = new Dog('Lucy');
const { sfn } = Dog;
const { fn } = Dog.prototype;
const { name: aa, fn: fnnn, getName } = lucy;


console.log(aa, sfn(), fnnn(), getName); 
console.log(getName.apply(lucy)); 
console.log(getName.bind(lucy)()); 
console.log(lucy.getName());