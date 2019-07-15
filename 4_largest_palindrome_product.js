/*
A palindromic number reads the same both ways.The largest palindrome made from the product of
two 2 - digit numbers is 9009 = 91× 99.

Find the largest palindrome made from the product of two 3 - digit numbers.
*/

//we need the product of TWO 3-digit numbers; that has a value that is the same when read right to left.;
//the product of 999 x 999 = 998,001;
//the product of 100 x 100 = 10,000;
//so we know that the product: 10,000 < product < 998,001;

//we created a helper function here to check if a product returned is a palindrome...
module.exports.checkIfProductIsPalindrome = (product) => {

    let sProduct = product.toString();
    let output = [];
    let zero = 0;

    for (let i = 0; i < sProduct.length; ++i) {
        output.push(+sProduct.charAt(i));
    }
    console.log(`an array of the values of ${product}: `, output);

    let joinedOutput = output.join("");
    console.log(`What is the data type of ${joinedOutput}?:`, typeof (joinedOutput)); //data type described here
    console.log(`joined output of output of product here: `, joinedOutput);

    let toNumberJoinedOutput = parseInt(joinedOutput);
    console.log(`What is the data type of ${toNumberJoinedOutput}?: `, typeof (toNumberJoinedOutput));
    console.log(`toNumberJoinedOutput: `, toNumberJoinedOutput);


    //NOTE: you can only reverse an array, not a string. to reverse a string, you should first convert string into an array with join
    reverseOutput = output.reverse();
    console.log(`reversed output of ${product} here: `, reverseOutput);

    let joinedReverseOutput = reverseOutput.join("");
    let toNumberJoinedReversedOutput = parseInt(joinedReverseOutput);

    if (product === toNumberJoinedReversedOutput) {
        console.log("YES!!!!", product);
        return product;
    } else {
        console.log("Nooo...: ", toNumberJoinedReversedOutput);
        return zero;
    }
}

//now we create a function to create possible products that may be a palindrome...

module.exports.getGreatestPalindrome =() => {
    //assume at first that the greatest palindrome is 12321l; which is the product of 111 and 111;
    let greatestPalindrome = 12321;
    let test = 0;
    let y = 100;

    for (x = 100; x < 1000; ++x){
        //the first outer loop will start with x ==100;
            for (y =100; y <1000; ++y){
            //we iterate over a range of y: fixing x===100, we increase y over 100 through 1000;
            test = this.checkIfProductIsPalindrome(x*y);
            //if the test if a palindrome, the product of x and y will be returned, else test === value of zero;
                if(greatestPalindrome < test){
                    //if the test is bigger than the currently greatest palindrome, then we re-assign the value of greatest
                    greatestPalindrome = test;
                }
            }
        test = this.checkIfProductIsPalindrome(x*y);
        if(greatestPalindrome < test){
            greatestPalindrome = test;
        }
    }
    console.log('greatest palindrome is: ', greatestPalindrome);
    return greatestPalindrome;
}






