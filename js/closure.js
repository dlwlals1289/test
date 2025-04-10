function discount(dcRate) {     
    return function (price) {   
        return price * dcRate;    
    };                          
}

const items = [{ item: '상품 A', price: 32000 },  { item: '상품 B', price: 45000 }];

const dc30 = discount(0.3);
for (const { item, price: orgPrice } of items) {
    const salePrice = orgPrice - dc30(orgPrice);  // 실제 판매 금액
    console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}


//currying
const MENU = {chinese : ['a', 'b'], italian : ['p', 's']};
function retaurant (kind){
    const menu = MENU[kind];
    return function(menuIndex){
        return menu[menuIndex];
    }
}

const lunch = retaurant('chinese');
console.log(lunch(1));

const dinner = retaurant('italian');
console.log(dinner(0), dinner(1));

// 출입자 수를 게이트 별로 구하는 함수
function getCounter(){
    let currCount =0;
    return {
        plus() { currCount += 1;},
        minus() { currCount -= 1;},
        count() { return currCount;},
    }
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate1.plus();
gate1.plus();
gate2.plus();
gate2.minus();

console.log('gate1>>', gate1.count());
console.log('gate2>>', gate2.count());
