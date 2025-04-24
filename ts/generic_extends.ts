interface IUser {
    id: number;
    age: number;
    name: string;
}
interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}
type Except<T, U> = T extends U ? never : T;    
type Ex0 = Except<IUser, IDept>;     
type Ex1 = Except<keyof IUser, keyof IDept>;    
type Ex2 = Except<keyof IDept, keyof IUser>;    
type xx = keyof IUser;

interface Post {
    id: number;
    title: string;
    content: string;
    user: IUser;
}

// function get<T>(container: T, key: keyof T) {
//     return container[key];
// }
const iUser : IUser = {id:11, age : 20, name : 'Hong'};
const post : Post = {id:1, title:"ad", content : 'content', user : iUser};
// const user = get<Post>(post, 'user');

function get<T, K extends keyof T>(container: T, key: K) {
    return container[key];
}
const user = get<Post, 'user'>(post, 'user');
console.log(user);

function lengthAfterSecond(text: string) {   // 또는 fu…ond(text: string): Promise<number>
    return new Promise<number>((resolve) =>
      setTimeout(resolve, 1000, text.length)
    );
}

async function lengthImmediately(text: string) {
    return text.length;        
}

lengthAfterSecond('!!!!!').then(console.log); // …(text: string): Promise<number>
lengthImmediately('@@@@@@@@@@').then(console.log);