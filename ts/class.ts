export {};
class WithProperty{
    myProperty!: () => void;   // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!

const instance = new WithProperty();
// instance.myProperty();  // OK?

class WithProperty2 {
    myProperty: () => void; // call signature
    constructor() {
        this.myProperty = () => {
            console.log('Hello, this is myProperty!');
        }
    }
}
const instance2 = new WithProperty2();
instance2.myProperty(); 

class Lesson {
    subject: string;

    constructor(subject : string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url : string;

    constructor(subject: string, url: string){
        super(subject);
        this.url = url;
        this.subject = '';
    }
}
let lesson : Lesson;

// lesson = new Lesson('coding');
// console.log(lesson.subject); // coding
lesson = new OnlineLesson('coding', 'orelly.com');
console.log(lesson.subject);

console.log('------------------------------------');
class Animal {
    constructor(public name: string, public mouse : string = 'x') {
        this.mouse = mouse;
    }

    feed(food : string):this{
        this.mouse = food;
        // console.log(food, 'feet to', this.name);
        return this;
    }
    print(){
        console.log('Animal name is ', this.name);
    }
}

class Dog extends Animal {
    print(){
        console.log('My name is ', this.name);
    }
};
class Cat extends Animal {
    print(){
        console.log(this.constructor.name, 'My name is ', this.name);
    }
};

const d : Dog  = new Dog('Maxx');
const c : Cat  = new Cat('Navve');

let animal : Animal = d;
animal.feed('banana').print();

animal = c;
animal.feed('fish').print();