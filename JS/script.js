/*


//alert("Hello"); // one time alert popup

//console.log("sandeep kumar");

//let name = prompt("hello")
//console.log(name);

// Q1:- get user to input a number using promt ("enter a number") check if the number is a multiple of 5 or not

let num = prompt("enter a number")
if(num % 5 == 0) {
    //console.log(num, "is multiple of 5");
} else{
    //console.log(num, "is not multiple of 5");
}

// Q2:- write a code which can give grades to students according to their scores.

let score = prompt("enter your score (0-100):")
let Grade;

if(score >= 90 && score <= 100) {
    console.log(Grade = "A");
 } else if(score >= 70 && score <= 89) {
    console.log(Grade = "B");
 }else if(score >= 60 && score <= 69) {
    console.log(Grade = "C");
 } else if(score >=50 && score <=59) {
    console.log(Grade = "D");
 } else if( score <=49) {
    console.log(Grade = "F");

 }

 console.log("according to your score, your grade was :", Grade);
 


 for(let count=1; count<=1000; count++) {

   console.log("sandeep kumar");

}
 
Q1 :- print the sume of  1 to n

*/

let sum = 0
let n = 100

for(let i = 1; i<=n; i++) {
   sum = sum + i;
}
console.log("sum =", sum);

 