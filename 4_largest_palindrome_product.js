/*
A palindromic number reads the same both ways.The largest palindrome made from the product of
two 2 - digit numbers is 9009 = 91× 99.

Find the largest palindrome made from the product of two 3 - digit numbers.
*/

//we need the product of TWO 3-digit numbers; that has a value that is the same when read right to left.;
//the product of 999 x 999 = 998,001;
//the product of 100 x 100 = 10,000;

let number = 998001;
let sNumber = number.toString();
let output = [];

for (let i = 0; i < sNumber.length; ++i) {
    output.push(+sNumber.charAt(i));
}
console.log(`an array of the values of ${number}: `, output);

let joinedOutput = output.join("");
console.log(`joined output of output of ${number} here: `,joinedOutput);
console.log(`It has a data type of`, typeof (joinedOutput)); //data type described here


//NOTE: you can only reverse an array, not a string. to reverse a string, you should first convert string into an array with join method
reverseOutput = output.reverse();
console.log(`reversed output of ${number} here: `,reverseOutput);




