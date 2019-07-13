
//create a container to contain the terms that make up a fibonacci
//start basic first, just get the first 10 terms in a fibo...
let arr = [];
let limit = 377; //the 13th term;

//the modified fibo function that checks for limit
const fiboLimit = (number) => {
    let i = 0;
    while (i < number) {
        if (i === 0) {
            arr.push(1);
        } else if (i === 1) {
            arr.push(2);
        } else {
            let x = arr[i - 2] + arr[i - 1];
            arr.push(x);
        }
        ++i;
    }
    console.log(arr);
    return arr;
}

fiboLimit(limit);


//fibo function here:
const fibo = (number) =>{
    let i = 0;
    while(i<number){
        if (i===0){
            arr.push(1);
        }else if(i===1){
            arr.push(2);
        }
        else{
            let x = arr[i - 2] + arr[i - 1];
            arr.push(x);
        }
        ++i;
    }
    console.log(arr);
    return arr;
}

fibo(10);


//for values of fibo that do not exceed 4 million;
// console.log(fibo(4000000));


// const factorial = (number) => {
//     if (number <= 0) { // terminal case
//         return 1;
//     } else { // block to execute
//         return (number * factorial(number - 1));
//     }
// };
// console.log(factorial(6));
// // 720

