`use strict`
const assert = require('assert');

class Emp {
    firstName;
    lastName;
    constructor(name) {
      return new Proxy(this, {
        get(target, prop) {
            // log(target, prop, loginEmp)
            if (prop === 'fullname') {
                return `${target.firstName} ${target.lastName}`;
            } else {
                return target[prop];
            }
        },

        set(target, prop, value) {
            if (prop === 'fullname') {
                [target.firstName, target.lastName] = value.split(' ');
            } else {
                target[prop] = value;
            }
            return target;
        }
    })
    }
}

const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!

hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!

console.log("--------------------");
const arr = [1, 2, 3, 4, 5];
const hong2 = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong2, lee, kim];

Object.defineProperties(Array.prototype, {
    firstObject : {
        get() {
            return this[0];
        },
        set(value){
            this[0] = value;
        }
    },
    lastObject : {
        get() {
            return this.at(-1);
        },
        set(value){
            this[this.length - 1] = value;
        }
    },
});

Array.prototype.mapBy = function (prop) {
    return this.map(a => a[prop]);
};
Array.prototype.filterBy = function(prop, value, isInclude){
    const cb = isInclude ? a => a[prop].includes(value) : a => a[prop] == value;
    return this.filter(cb);
};

Array.prototype.findBy = function(prop, value){
    return this.find(a => a[prop] == value);
};
Array.prototype.sortBy = function(prop){
    const [key, dir = 'asc'] = prop.split(':');
    const sign = dir === 'desc' ? -1 : 1;
    return this.sort((a,b) => a[key]>b[key] ? 1*sign : -1*sign);
};
Array.prototype.rejectBy = function (prop, value, isInclude) {
    const cb = isInclude ? a => !a[prop].includes(value) : a => a[prop] != value;
    return this.filter(cb);
}
assert.deepStrictEqual(users.rejectBy('id', 2), [hong2, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);

// assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong2]);
// assert.deepStrictEqual(users.sortBy('name'), [hong2, kim, lee]);

// assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);

// assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
// assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);

assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong2, kim]); // key, value일부, isInclude

// assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
// assert.deepStrictEqual(users.firstObject, hong2);
// assert.deepStrictEqual(users.lastObject, kim);
// users.firstObject = kim;
// assert.deepStrictEqual(users.firstObject, kim);
// users.lastObject = hong2;
// assert.deepStrictEqual(users.lastObject, hong2);

