'use strict';




    console.log('=====================================================');
    console.log('Таблица степеней:');
    for (let i = 1; i <= 10; i++){
        console.log('============');
        for (let j = 1; j <= 10; j++){
            console.log(`${i}^${j} = ${i ** j}`);
        }
    }
    console.log('=====================================================');



    const isPrime = x => {

        console.log(`Рассматриваем число ${x}`);

        if (x === 1){
            return `Введена единица`;
        }else{
            for (let n = 10; n > 1; n--){
                if (n === x) continue;
                if (!(x % n)){
                    return `Число не простое, найден делитель ${n}`;
                }
            }
        }

        return `Число простое`;
    }

    console.log(isPrime(1));
    console.log(isPrime(2));
    console.log(isPrime(3));
    console.log(isPrime(7));
    console.log(isPrime(21));
    console.log(isPrime(56));
    console.log(isPrime(191));
    console.log(isPrime(192));
    console.log(isPrime(911));
    console.log(isPrime(912));
    console.log(isPrime(1987));
    console.log(isPrime(1995));