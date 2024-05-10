/* Q1 :- Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.
*/

// const input = require('prompt-sync')();

/*let date = Number(input("enter the date:"));
let month = input("enter the month:");
let year = Number(input("enetr the year:"));

console.log(date);
console.log(month);
console.log(year); */

/* Q2 :- Write a program to take input from the user, and then print it to the output.
 */

/*let a = input("enter the user input:");
console.log(a); */

/* Q3 :- Imagine you and your friend have brought different snacks for lunch. However, you want to exchange your snacks with each other. To do this, you decide to enlist the help of a friend who can hold one snack box while you exchange with your other friend. Similarly, in programming, we can use a third variable to help us swap the values of two variables.
        hint :- you can use third variable */

/*let temp;
let a = Number(input("enter the value of a:"));
let b = Number(input("enter the value of b:"));

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b); */

/* Q4 :- Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
*/

/*let x = Number(input("enter the value of first number:"));
let  y = Number(input("enter the value of second number:"));

let addition = x+y;
let subtraction = x-y;
let multiplication = x*y;
let division = x/y;
let integer_division = Math.floor(x/y);
let modulus = x%y;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(integer_division);
console.log(modulus); */

/* Q5 :- Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
*/

/*let A = Number(input("enetr the value of A:"));
let B = Number(input("enter the value of B:"));

let quotient = Math.floor(A/B);
let remainder = A%B;

console.log(quotient);
console.log(remainder); */

/* Q6 :- Write a program to take a positive number from the user and then display the last digit of that number.
*/

/*let positive_number = Number(input("enter the value:"));
output = positive_number%10

console.log(output); */

/* Q7 :- Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9
*/

/*let c = Number(input("enter temprature in celcius:"));

let F = (c*9/5)+32

console.log(F); */

/* Q8 :- Write a program to take two inputs from the user and swap them without using a temporary or third variable.
*/

/*let num1 = Number(input("enter the value of first input:"));
let num2 = Number(input("enter the value of second input:"));

num1 = num1+num2;
num2 = num1-num2;
num1 = num1-num2;

console.log(num1);
console.log(num2); */

/* Q9 :- Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?
*/

/*let a = Number(input("enter the value of a:"));
let b = Number(input("enter the value of b:"));

let x = Math.floor(a/b);
let y = x*b;

console.log(y); */

// Nullish operator
// let a = undefined
// let b = null
// let res = a ?? b ?? 56
// console.log(res);

