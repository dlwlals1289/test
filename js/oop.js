const obj = {id: 1, name: 'Hong'};
// cf. obj = {..., __proto__: { x: 11 }};

// console.log(obj.toString);
Object.getPrototypeOf(obj) === Object.prototype
  === obj.constructor.prototype === obj.__proto__
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  static ID = 1;
  constructor(name) { // {name: …}
    this.name = name;
  }
} 
const dog = new Animal('Dog');
console.log('ok=', Object.keys(obj));
console.log('ak=', Object.keys(dog));

for (let k in dog) console.log('k=', k);
// console.log('oh=', obj.hasOwnproperty('id'));
// console.log('dh=', dog.hasOwnproperty('id'));

console.log(typeof Animal);             // Function
console.log(obj instanceof Object );    // true
console.log(Object instanceof Function);// true

console.log("---------------------")
console.log(Animal instanceof Object); // true
console.log(dog instanceof Animal);    // true
console.log(dog instanceof Function);    // false
console.log(typeof (dog, obj, [], null));  // object
console.log(typeof undefined);  // undefined

console.log("---------------------")
console.log(dog instanceof Array);     // false
console.log([] instanceof Array);      // true
console.log({} instanceof Object);     // true
console.log([] instanceof Object);     // true


console.log("---------------------")
console.log(dog.constructor === Animal);  // true;
console.log(Object.values(dog));          // ['Dog']
console.log(Object.entries(dog));         // [{name : 'Dog'}]


console.log("---------------------")
Object.prototype.name = 'Obj';

const cls = new (class {
  constructor() { console.log('constructor!');}
  eat() {}
})();

const animal = new Animal();
console.log(animal.name, dog.name); // Obj, Dog

// prototype method (property Shadowing) 
Animal.prototype.f = function() {
  console.log('Animal.f>>', this.name);
}

animal.f(); // Animal.f
dog.f();    // Animal.f 

class Dog extends Animal {
    #age = 0;

    constructor(name, age){
        super(name);
        this.name = name;
        this.#age = age;
    }
    getAge(){
        return this.#age;
    }

    setAge(age){
        this.#age = age;
    }
    f() {
        return this.ID;
    }
    static sf() {
        return this.ID;
    }
}

const ani = new Animal();
const aid = ani.ID;
console.log("🚀 ~ aid:", aid)

const dog2 = new Dog();
const did1 = dog2.ID;
const did2 = dog2.f()
console.log("🚀 ~ did:", did1)
console.log("🚀 ~ did2:", did2)

const dog3 = new Dog("ari" ,3);
console.log(dog3.name);
console.log(dog3.getAge());
dog3.setAge(5);
console.log(dog3.getAge());

console.log("------------------")
function wrapFullname(user){
    return new Proxy(user, {
        get(prop){
            if(prop == 'fullname'){
                return `${this.lastName} ${this.firstName}`;
            }
            else {
                return user[prop];
            }
        },

        set(target, prop, value){
            if(prop == 'fullname'){
                [target.firstName, target.lastName] = value.split(' ');
            }
            else {
                user[prop] = value;
            }
        }
    })
}
const hong = {
    id : 1,
    firstName : 'Gildong',
    lastName : 'Hong',

    get fullname(){
        return `${this.lastName} ${this.firstName}`;
    },

    set fullname(fname){
        this.firstName = fname.split(' ')[0];
        this.lastName = fname.split(' ')[1];
    }
}

const fullname = hong.fullname;
console.log(fullname);
hong.fullname = 'John Hong';
console.log(hong.fullname);

console.log("------------------");
console.log(Object.getPrototypeOf([]) === Array.prototype); // true
console.log(Object.getPrototypeOf([]) === Object.prototype); // false

