// setImmediate(() => console.log('setImmediate', new Date()));
// setTimeout(() => console.log('setTimeout', new Date()), 0);
// process.nextTick(() => console.log('nextTick'));

// // i/o polling
// const fs = require('fs'); // CJS
// fs.readFile('aaa.js', result => {
//   setTimeout(() => {
//     console.log('setTimeout22');
//   }, 0);

//   setImmediate(() => {
//     console.log('setImmediate22');
//   });
//   process.nextTick(() => console.log('nextTick22'));
// });

globalThis.name = 'GlobalName';
this.name = 'ModuleName';

function f(){
    console.log('f.this = ', this.name);
}
f();

const af = () => {
    console.log('af.this = ', this.name);
};
af();

const obj = {
    name: 'ObjName',
    bark() {     // good!(호출한 객체)
        console.log('bark=', this.name);
    },
    bark2: () => // bad!! (this=전역/module)
        console.log('bark2=', this.name),
};
  
obj.bark();
obj.bark2();

const expressFn = function(name) {
    // if, 'use strict' ?
    // this.name = name;
    console.log(new.target, this.name, name);
  }
  
  
const arrowFn = (name) => {
    // this.name = name;
    console.log(new.target, this.name, name);
}

expressFn('expfn');
// arrowFn('afn');

const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!

const Dog = function(name) {
    console.log(name, '=>', this.name, new.target, this instanceof Dog);
    this.name = name;
    this.bark = function () {
        console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
        console.log('bark2=', new.target, this.name, name);
}

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');

// dog.bark();
// dog.bark2();
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy);

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.bark = function () {
        console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
        console.log('bark2=', new.target, this.name, name);

    return this;
}
  
const cat = Cat('Coco');
//   const cat = new Cat(''); // error!!
cat.bark(); // ?
cat.bark2(); // ?
//   Cat.bark(); // ?
console.log('type=', typeof cat); // ? 
  