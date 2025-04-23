type sizeKey = 'XS' | 'S' | 'M' | 'L' | 'XL';
// const SIZE :{id : string, price : number}[] = [
//     {id: 'XS', price: 8000},
//     {id: 'S', price: 10000},
//     {id: 'M', price: 12000},
//     {id: 'L', price: 14000},
//     {id: 'XL', price: 15000},
// ]
// const sizeOption : {[key: string]: number} = {XS:1, S: 5, M: 2, L: 2, XL: 4};
// const totalPrice = SIZE.reduce((currPrice, size) => {
    //     return currPrice + ((sizeOption[size.id] ?? 0) * size.price);
    // }, 0);
    
    // const sizeOption2 = {XS:1, S: 5, MM: 2, L: 2, XL: 4};
    // const totalPrice2 = SIZE.reduce((currPrice, size) => {
        //     const key = size.id as keyof typeof sizeOption;
        //     return currPrice + ((sizeOption2[size.id] ?? 0) * size.price);
        // }, 0);
const SIZE : S = [
    {id: 'XS', price: 8000},
    {id: 'S', price: 10000},
    {id: 'M', price: 12000},
    {id: 'L', price: 14000},
    {id: 'XL', price: 15000},
]
type S = { id : sizeKey, price: number }[];
type SO = {
    [key in sizeKey]: number;
}
const sizeOption : SO = {XS:1, S: 5, M: 2, L: 2, XL: 4};
const totalPrice = SIZE.reduce((currPrice, size) => {
    return currPrice + (sizeOption[size.id] * size.price);
}, 0);

console.log(totalPrice);