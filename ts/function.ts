function add (a : number, b : number) : string{
    // return a+b;
    return (a+b).toString();
}

const add2 = (a :number, b :number) => a+b;
console.log(typeof add2(1,2));

const introduce = (name:string, height?:number) => {
    console.log(`이름 : ${name}`);
    if(typeof height === 'number'){
        console.log(`키 : ${height + 10}`)   
    }
}
introduce("김현준"); // OK
introduce("김현준", 110); // OK
    
const introduce3  = (name : string, age : number, height?:number) => {
    console.log(`이름 :  ${name}`);
    console.log(`나이 : ${age} 살`);
    if(height){
        return console.log(`키 ${height+10}cm`);   
    }
}

console.log("------------------------------------");
const introduce4 = (name : string, height = '') => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height}`);
}
console.log(introduce4('김현준', undefined));
console.log(introduce4('김현준', '170'));

const factorial =  (n : number) : number => {
    if(n<=1) return 1;
    return n *factorial(n-1);
}

console.log(factorial(5));

const songs = ["Juice", "Painkiller", "Candy"];

function runOnSongs(index : number, getSongAt : (index: number) => string){
//    for(let i = 0; i < songs.length; i += 1){
//        console.log(getSongAt(i));
//    }
       console.log(getSongAt(index));
}
function getSongAtX(index: number){
   return `${songs[index]}`
}
// runOnSongs(getSongAtX); // OK
runOnSongs(1, getSongAtX); // OK

// function logSong(song: string){
//    return `${song}`;
// }
// runOnSongs(logSong);

console.log("----------------------");
function tFn(this : {id : number}, x : string){
    console.log('tFn>> ', this.id);
}

tFn.bind({id:1})('x');

const t = setTimeout(console.log, 1000, '1');

const a :number[] = [];
a[100]?.toFixed();

