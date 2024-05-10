//Q23 :- Take the number N and the name from the user as inputs, and print the name N times.

// const input = require('prompt-sync')();
// let n = Number(input("enter the value of n: "));
// let name = input("enter the name: ");

// for(let i =0; (i<n); i++){
//     console.log(name);
// }

// Q24 :- Imagine you're on a fun journey of exploring numbers! You're interested in finding out all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number you choose.

//Take a number N from the user as input, and print even numbers up to N.

//Tips:

//1. Remember, even numbers are those that are divisible by 2 without leaving a remainder.
//2. Pay attention to printing the numbers in the correct format.
//3. Ensure accuracy in the range of numbers displayed.

// const input = require('prompt-sync')();
// let n = Number(input("enter the value of n: "));

// for(let i = 1; (i<n); i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// Q25:- Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.

//Write a program to print the sum of odd numbers up to N.

//Tips:

//1. Remember, odd numbers are those that are not divisible by 2, leaving a remainder of 1.
//2. Pay attention to calculating the sum accurately.
//3. Ensure the correctness of the range of numbers included in the sum.


// const input = require('prompt-sync')();
// let n = Number(input("enter the value of n: "));
// let sum = 0;

// for(let i = 1; (i<n); i++){
//     if(i%2 != 0){
//         sum+= i;
//     }
// }

// console.log(sum);

// Q26:- Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

// const input = require('prompt-sync')();
// let M = Number(input('enter the value of M: '));
// let N = Number(input('enter the value of N: '));
// let sum = 0

// for(let i = M; (i<=N); i++){
//     sum+= i;
// }
// console.log(sum);

// Q27:- Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N


// const input = require('prompt-sync')();
// let n = Number(input('enter the value of n: '));
// let sum = 0

// for(let i = 1; (i<=n); i++){
//     sum+= 1/i;
// }

// console.log(sum);

// Q28:- Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )

// const input = require('prompt-sync')();
// let number = Number(input("enter the number: "));

// if(number>0){
//     if(number<10){
//         console.log("1");
//     }
//     else
//     {
//         if(number<100){
//             console.log("2");
//         }
//         else
//         {
//             if(number<1000){
//                 console.log("3");
//             }
//             else{
//                 if(number<10000){
//                     console.log("4");
//                 }
//                 else{
//                     if(number<100000){
//                         console.log("5");
//                     }
//                     else{
//                         if(number<1000000){
//                             console.log("6");
//                         }
//                         else
//                         {
//                             if(number<10000000){
//                                 console.log("7");
//                             }
//                             else
//                             {
//                                 if(number<100000000){
//                                     console.log("8");
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

// }


//with loop

// const input = require('prompt-sync')();
// let number = Number(input("enter the number: "));
// let count = 0;

// for(let i =0; number>0; number = Math.floor(number/10)){
//     count++;
// }
// console.log(count);

// Q29:- Write a program to take a number from the user and print the sum of the digits of the given number.

// const input = require('prompt-sync')();
// num = Number(input("enter the number: "));
// let sum = 0;
// let a;

// for(let i = 0; num>0; num = Math.floor(num/10)){
//     a = num%10;
//     sum+= a;
// }
// console.log(sum);

// Q31:- Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

// const input = require('prompt-sync')();
// let num1 = Number(input("enter the number: "));
// let sum = 0
// let a;

// for(let i =0; num1>0; num1 = Math.floor(num1/10)){
//     a = num1%10;
//     sum = sum*10 + a
// }
// console.log(sum);

// Q35 :- Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors. 

//For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm

// const input = require('prompt-sync')();
// let num2 = Number(input("enter the number: "));
// count = 0

// for(let i = 1; i<=num2; i++){
//     if(num2%i == 0){
//         count+= 1
//     }
// }
// if(count == 2){
//     console.log("Yes");
// }
// else{
//     console.log("Not");
// }

// Q37:- Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
 
//A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No. 

// const input = require('prompt-sync')();
// let num3 = Number(input("enter the number: "));
// let sum = 0;

// for(let i = 0; i<num3; i++){
//     if(num3%i == 0){
//         sum+= i;
//     }
// }
// if(sum == num3){
//     console.log(num3, "a perfect number");
// }
// else{
//     console.log(num3, "is not a perfect number");
// }