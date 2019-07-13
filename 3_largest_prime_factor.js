//The prime factors of 13195 are 5, 7, 13 and 29. (and not 35) (also the product of all prime numbers gets you the original value)

//What is the largest prime factor of the number 600,851,475,143 ?

/*what are prime numbers? Prime numbers are numbers that can only be divided by one and itself.
Therefore, suppose n is a prime number, if (n/n)= 1 or (n/1) = n ONLY, it must be a prime number.

What are factors? Let factor be m. Factors are numbers that are smaller than n, and the division
of these two numbers will not yield a remainder. i.e. (n%m) === 0;

How do we select the largest prime factor? We can follow along the loop chain, and if we find any
'm' factor that passes the above two conditions, we compare it against the last 'm', to see which
is bigger. Always choose the larger 'm', if it exists.

Then, how do we go about selecting factors? Factors are integers that are between 0 and n; inclusive.
We can use a loop to cycle from 0 to length(n).

Therefore, how do we combine the above into a solution?....
*/

//create an array to contain a list of all prime factors...
let primeFactors = [];
//set the length or the limit...

// let dividend = 13195;
let dividend = 600851475143;
let quotient = dividend;
let highestPrimeFactor;
//dividend, divisor and quotient, we do not want a remainder...
// e.g. 54 / 9 = 6 (r =0)

const getPrimeFactors = () => {

//any smaller factor will never exceed the square root of the number;
//also we start at 2 because 1 is not a proper prime factor...
    for (let i = 2; i <= Math.sqrt(dividend); ++i){
        //testing if i is a factor...
        if(quotient % i === 0 && quotient !== i){
            quotient = quotient / i;
            primeFactors.push(i);
        }
    }
        primeFactors.push(quotient);
        highestPrimeFactor = quotient;
        console.log('All prime factors: ', primeFactors);
        console.log('The quotient so far: ', quotient);
        console.log('Which is also the highest prime factor: ', highestPrimeFactor);
        console.log('Or using a math max and spread operator: ', Math.max(...primeFactors))
        return highestPrimeFactor;
        //return primeFactors[primeFactors.length-1]
}

//initialize the function:
getPrimeFactors();

//recursive version here?



