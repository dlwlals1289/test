export {};
type Xid = { id : number };
type Xname = { name : string } & Xid;
type Xage = {age : number } & Xid;
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;

type P = Xid | (Xname & Xage);
type Q = Xid & (Xname | Xage);

let xx : X = { id : 1, name : 'Hong' };
xx = { id : 2, age : 23 };

let yy : Y = { id : 3, name : 'Hong', age : 23 };

let pp : P = { id  : 1};
pp = { id  : 1, name : 'Hong'};
pp = { id  : 1, age : 23};
pp = { id  : 1, name : 'Hong', age : 23};

let qq : Q = { id : 1, name : 'Hong'};
qq = { id : 1, age : 23};
qq = { id : 1, name : 'Hong', age : 23};

interface A {
    id: number;
}

// B has id + name
interface B extends A {  // A type alias라도 가능!
    name: string;
}
type TUser = {
    id: number,
    name: string,
};

type TAddrUser = TUser & {
    addr: string
}

type TDept = {
    id: number,
    dname: string,
    captain: string
}

type Ud1 = TUser | TDept;
const ud1: Ud1 = {id: 1, name: 'HH'};
