export {};

class Factory<T> {
    protected products: T[];

    constructor(product: T) {
        this.products = [product];
    }

    create(product: T) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
}

type Syrup =
    | { syrup: 'choco', price: 500 }
    | { syrup: 'strawberry', price: 800 };
type Topping = 'java' | 'cherry';
type Coffee = { menu: string, price: number };

class CoffeeFactory extends Factory<Coffee> {
    order<T>(menu: string, toppings: T[]) {
        const coffee = this.products.find(
          ({ menu: _coffee }) => _coffee === menu
        );

        return coffee ? 
                { ...coffee, additives: toppings } 
               : null;
    }
}

const coffeeFactory = new CoffeeFactory({
    menu: 'americano',
    price: 2000
});

const myCoffee = coffeeFactory.order<Syrup | Topping>('americano', [
    { syrup: 'choco', price: 500 },
    'java',
    'cherry'
]);


// const myAdditionalPrice = myCoffee?.additives.reduce(
    // (sum, item) => sum += item.price, 0 ); // OK? Error?

const yourCoffee = coffeeFactory.order<Syrup>('americano', [
    { syrup: 'choco', price: 500 },
    { syrup: 'strawberry', price: 800 }
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce((s, c) =>
    s += c.price, 0); // OK? Error? OK!

console.log("--------------------------------------");
interface IUser {
    id: number;
    name: string;
    age: number;
}
interface IDept {
    id: number;
    dname: string;
    age: string;
    captain: number;
}
interface FailureResult {
    error: Error;
    succeeded: false;
}
interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
}
type Result<T> = FailureResult | SuccessfulResult<T>;
function handleResult<Data> (result: Result<Data>) {
    if (result.succeeded) { // if( 'data' in result) {
        console.log('we did it!! ', result.data); // SuccessfulResult<Data> 타입으로 내로잉!
    } else {
        console.log(`Awww...${result.error}`); // FailureResult 타입으로 내로잉!
    }
}
/* Usage Example */
function getUser(): Result<IUser> {
    return Math.random() > 0.5
        ? { error: new Error(), succeeded: false }
        : { data: { id: 1, name: 'hong', age: 25 }, succeeded: true };
}

function getDept(): Result<IDept> {
    return Math.random() > 0.5
        ? { error: new Error(), succeeded: false }
        : { data: { id: 1, dname: 'dev', captain: 10, age: '30' }, succeeded: true };
}

handleResult(getUser());

handleResult(getDept());

type ValueOf<T> = T[keyof T];
