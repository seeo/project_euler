/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Hence, find the sum of all the multiples of 3 or 5 below 1000. */

//first we get comfortable with getting numbers 3,5,6,9 for integers below 10.
//Then sum them up, check if result == 23

const sum_multiples_of_3_and_5 = () => {
    let limit = 1000;
    let result = 0;
    //initialise a for loop with i beginning at zero, and limit set at 10.
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    console.log(result);
    return result;
}

sum_multiples_of_3_and_5();

//for limit === 1000, the ans is 233168;