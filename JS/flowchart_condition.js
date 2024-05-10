/* Q10 :- Write a program to take two numbers from the user and determine the greater of those two given numbers.
*/

// const input = require('prompt-sync')();
// let a = Number(input("enter the first number:"));
// let b = Number(input("enter the second number:"));

// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }  

/* Q11 :- Write a program to take a number from the user and print that number as Odd or Even.
*/

// const input = require('prompt-sync')();
// let num = Number(input("enter the value:"));

// if (num%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd"); 
// }

/* Q12 :- Write a program to take a number from the user and output whether that number is negative, positive or zero.
*/

// const input = require('prompt-sync')();
// let a = Number(input("enter the value:"));

// if (a<0){
//     console.log("negative");
// }else if(a>0){
//     console.log("positive");
// }
// else{
//     console.log("zero");
// } 

/* Q13 :- Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
*/

// const input = require('prompt-sync')();
// let a = Number(input("enter the value: "));

// if(a%2==0){
//     console.log(a);
// }
// else{
//     a = a*2
//     console.log(a);
// } 

/* Q14:- Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
*/

// const input = require('prompt-sync')();
// let a = Number(input("enter the value of first number: "));
// let b = Number(input("enter the value of second number "));
// let c = Number(input("enter the value of third number "));

// if(a>b){
//     if(a>c){
//         console.log(a);
//     }
//     else{
//         console.log(c)
//     }
// }
// else if(b>c){
    
//         console.log(b);
//     }
//     else{
//         console.log(c);
// }  

/* Q15:- Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).
*/

// const input = require('prompt-sync')();
// let max;
// let a = Number(input("enter the value of first number: "));
// let b = Number(input("enter the value of second number: "));
// let c = Number(input("enter the value of third number: "));
// let d = Number(input("enter the value of fourth number: "));

// if(a>b){
//     max = a
// }
// else{
//     max = b
// }
// if(max>c){
//     max = max
// }
// else{
//     max = c

// }
// if(max>d){
//     max = max
// }
// else{
//     max = d
// }

// console.log("max =", max);  

/* Q16 :- Imagine you and your friends are exploring the concept of leap years. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400. In simpler terms, it's a special year with an extra day in February (February 29th). You're curious to know whether a particular year is a leap year or not.
*/

// const input = require('prompt-sync')();
// let year = Number(input("enter the year: "));

// if(year%4==0){
//     if(year%100!=0){
//         console.log("year is leap year");
//     }
//     else if (year%400==0){
//         console.log("year is leap year");
//     }
//     else{
//         console.log("year is not leap year");
//     }
// }
// else{
//     console.log("year is not leap year");   
// } 

/* Q17 :- Write a program to take 3 numbers from the user and output the second max of 3 numbers.
*/

// const input = require('prompt-sync')();
// let max;
// let second_max;
// let a = Number(input("enter the value of first number: "));
// let b = Number(input("enter the value of second number: "));
// let c = Number(input("enter the value of third number: "));

// if(a>b){
//     max = a;
//     second_max = b
// }
// else{
//     max = b;
//     second_max = a
// }
// if(max>c){
//     if(second_max<c){
//         second_max = c
//     }
// }
// else{
//     second_max = max;
//     max=c
// }
// console.log("second max = ", second_max); 

/* Q18 :-   Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances. The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.
*/

// const input = require('prompt-sync')();
// let HRA;
// let DA;
// let gross_salary;
// let basic_salary = Number(input("enter the basic salary: "));

// if(basic_salary<=10000){
//     HRA = (basic_salary*20)/100;
//     DA = (basic_salary*80)/100;
//     gross_salary = (basic_salary + HRA + DA);
// }
// else if(basic_salary<=20000){
//     HRA = (basic_salary*25)/100;
//     DA = (basic_salary*90)/100;
//     gross_salary = (basic_salary + HRA + DA);
// }
// else{HRA = (basic_salary*30)/100;
//     DA = (basic_salary*95)/100;
//     gross_salary = (basic_salary + HRA + DA);
// }

// console.log(gross_salary);  

/* Q19 :- Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.
*/

// const input = require('prompt-sync')();
// let bill;
// let surcharge;
// let total_bill;
// let units = Number(input("enter the units: "));


// if(units<=50){
//     bill = (units*0.50);
//     surcharge = (bill*20)/100;
//     total_bill = (bill + surcharge);
// }
// else if(units<=150){
//     bill = (50*0.50 + (units-50)*0.75);
//     surcharge = (bill*20)/100;
//     total_bill = (bill + surcharge);
// }
// else if(units<=250){
//     bill = (50*0.50 + 100*0.75 +(units-150)*1.20);
//     surcharge = (bill*20)/100;
//     total_bill = (bill + surcharge);
// }
// else{
//     bill = (50*0.50 + 100*0.75 + 100*1.20 +(units-250)*1.50);
//     surcharge = (bill*20)/100;
//     total_bill = (bill + surcharge);
// }

// console.log("electricity Bill = ", total_bill); 

/* Q20 :- Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
*/

// const input = require('prompt-sync')();
// let max;
// let second_max;
// let third_max;
// let a = Number(input("enetr the value of first number: "));
// let b = Number(input("enetr the value of second number: "));
// let c = Number(input("enetr the value of third number: "));
// let d = Number(input("enetr the value of fourth number: "));

// if(a>b){
//     max = a;
//     second_max = b
// }
// else{
//     max = b;
//     second_max = a
// }
// if(max>c){
//         if(second_max>c){
//         third_max = c
//     }else{
//         third_max = second_max
//         second_max = c
//     }
// }
// else{
//     third_max = second_max;
//     second_max = max;
//     max = c;
// }
// if(max>d){
//      if(second_max>d){
//         if(third_max<d){
//             third_max = d;
//         }
//     }
// }
// else{
//     third_max = second_max; 
//     second_max = max;
//     max = d;
// }

// console.log("third max = ", third_max);  

/* Write a program to take 5 numbers from the user and print the frequency of every number.
*/

const input = require('readline-sync');
let a = input.questionInt("enter the value of first number: ");
let b =input.questionInt("enter the value of second number: ");
let c =input.questionInt("enter the value of third number: ");
let d =input.questionInt("enter the value of fourth number: ");
let e =input.questionInt("enter the value of fifth number: ");
let fr1 = 1, fr2 = 1, fr3 = 1, fr4 = 1, fr5 = 1;


    if(a==b){
        fr1++;
        b=0
        if(a==c){
            fr1++;
            c=0;
            if(a==d){
                fr1++;
                d=0;
                if(a==e){
                    fr1++;
                    e=0
                }
            }else if(a==e){
                fr1++;
                e=0;
            }
        }else if(a==d){
            fr1++;
            d=0;
            if(a==e){
                fr1++;
                e=0;
            }
        }else if(a==e){
            fr1++;
            e=0
        }
    }else if(a==c){
        fr1++;
        c=0;
        if(a==d){
            fr1++;
            d=0;
            if(a==e){
                fr1++;
                e=0
            }
            
                
            
        }else if(a==e){
            fr1++;
            e=0
        }
    }else if(a==d){
        fr1++;
        d=0;
        if(a==e){
            fr1++
            e=0
        }
    }else if(a==e){
        fr1++;
        e=0
    }
console.log(`${a} =`, fr1);

if(b!=0){
    if(b==c){
        fr2++
        b=0;
        if(b==d){
            fr2++;
            d=0;
            if(b==e){
                fr2++;
                e=0;
            }
        }else if(b==e){
            fr2++;
            e=0;
        }
    }else if(b==d){
        fr2++;
        d=0;
        if(b==e){
            fr2++;
            e=0;
        }
    }else if(b==e){
        fr2++;
        e=0;
    }
    console.log(`${b} =`, fr2);
}

if(c!=0){
    if(c==d){
        fr3++;
        d=0;
        if(c==e){
            fr3++;
            e=0;
        }
    }else if(c==e){
        fr3++;
        e=0;
    }
    console.log(`${c} =`, fr3);
}

if(d!=0){
    if(d==e){
        fr4++;
        e=0;
    }
    console.log(`${d} =`, fr4);
}

if(e!=0){
    console.log(`${e} =`, fr5);
} 


// let a = 5;
// a = null;
// console.log(a);