'use strict';

    const basketSum = 100000;
    const basketItemsCount = 3;
    const promo = 'G3H2Z1';

    const getNewPrice = (sum, count, promo = '') => {
        let newSum = sum;

        if (count >= 10) newSum *= 0.97;

        if (newSum > 30000){
            newSum -= (newSum - 30000) * 0.15;
        }

        if (promo === 'METHED'){
            newSum *= 0.9;
        }

        if (promo === 'G3H2Z1' && newSum>2000){
            newSum -= 500;
        }

        return newSum;
    }

    console.log (`Задание 4 (сложная скидка)`);
    console.log (getNewPrice(basketSum, basketItemsCount, promo));
    console.log (`=====================================`);
  