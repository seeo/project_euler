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
    }
}

//now we create a function to create possible products that may be a palindrome...

module.exports.getGreatestPalindrome =() => {
    let greatestPalindrome = 0;
    let greaterPalindrome = 0;
    let test = 0;
    let x = 100;
    let y = 100;

    for (x = 100; x < 1000; ++x){
        test = this.checkIfProductIsPalindrome(x*y);
        if (greatestPalindrome < this.checkIfProductIsPalindrome(x * y)) {
            greatestPalindrome = this.checkIfProductIsPalindrome(x * y);
        } else {
            greaterPalindrome = this.checkIfProductIsPalindrome(x * y);
            greatestPalindrome = this.checkIfProductIsPalindrome((x + 1) * y);
            if (greatestPalindrome > greaterPalindrome) {
                greaterPalindrome = greatestPalindrome;
            }
        }


        for (y = 100; y< 1000; ++y){
            greaterPalindrome = this.checkIfProductIsPalindrome(x * y);
            greatestPalindrome = this.checkIfProductIsPalindrome(x * (y+1));
            if (greatestPalindrome > greaterPalindrome){
                greaterPalindrome = greatestPalindrome;
            }
        }


    }
    console.log('greatest palindrome is: ', greatestPalindrome);
    return greatestPalindrome;
}






