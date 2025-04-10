const user = {
    '': 1,        
    ' ': 3,       
    123: 1,       
    12345n: 2,    
    true: 1,      
    id: 2,          
    [`name`]: 'Hong',  
    [Symbol()]: 'Hong',   
    [`${new Date()}`]: 365,    
    'my-friends': ['Han', 'Kim'],
    // getInfo: () => `${this.id}-${this.name}`,       
    getInfo() { return `${this.id}-${this.name}`; }, 
};

console.log(Object.keys(user), Object.keys(user).length);
user.addr = 12345;
console.log(user.hasOwnProperty('addr'));

delete user.addr;
console.log('addr' in user);
  
user[`${user.id}'s name`] = `Mr. ${user.name}`;
console.log(user);

class Dog{
    id = 1;
    static x = 2;
}
const dog = new Dog();
Dog.x = 3;

console.log(Dog.x);
console.log(dog.x);
console.log(Object.getOwnPropertyDescriptors(Dog));