export {}; 
let xuser: {id: number, name: string};
xuser = {id: 1, name: 'xx'}; // OK
// xuser = {id: 1}; // Error (Property 'name' missing in type)
// xuser = {id: 1, name: 'xx', age: 30}; // Error ({id, name, age} is not assignable to type {id,name} )

// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = {id: 1, name: 'Hong'}; // OK
// hong = {id: 1}; // Error (name property missing)
// hong = {id: 1, name: 'Hong', addr: 'Pusan'}; // Error(not assignable)  Freshness!
hong = {id: 1, name: 'Hong', addr: 'Pusan'} as TUser; // OK (turn-off Freshness!)
console.log(hong);

const kim = {id : 2, name : 'kim', addr : 'Seoul'};
xuser = kim; 


type TUser2 = { 
    id: number; name: string;
    addr?: string 
};
// const y1 : TUser[] = [{id: 1, name: 'Hong', addr: 'Seoul'}];
const y1 : TUser[] = [{id: 1, name: 'Hong', addr: 'Seoul'}, kim];
// const y2 : [TUser, TUser] = [{id: 1, name: 'Hong', addr: 'Seoul'}, kim];