// Write a program to print all the numbers from the given array using a loop. 

//const { log } = require('sync');

// let N = [23, 45, 32, 25, 46, 33, 71, 90]

// for(let i of N){
//     console.log(i);
// }

// Write a program to create an array of natural numbers till 20 and print it.

// const input = require('prompt-sync')()
// let range = Number(input("enter the value: "))
// let arr = []
//  for(let i=0; i<range; i++){
//     console.log(arr[i] = i+1)
//  }

// Write a program to reverse the array and print the reversed array.

// const input = require('prompt-sync')()
// let arr1 = [];
// let temp;
// let n = input("enter the size of an array: ")

// for(let i=0;i<n;i++){
//     arr1[i]=Number(input("Enter the elements of an array."))
// }

// for(let i = 0; i<arr1.length/2; i++){
//     temp = arr1[i];
//     arr1[i] = arr1[n-i-1];
//     arr1[n-i-1] = temp
// }

// console.log(arr1);

// by reverse method in js:-

// for(let i=0;i<n;i++){
//     arr1[i]=Number(input("Enter the elements of an array."))
// }
// arr1.reverse()
// console.log(arr1);


// Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

// const input = require('prompt-sync')();
// let arr2 = [];
// let n = Number(input("enter the size of array: "))

// for(let i = 0; i<n; i++){
//     arr2[i] = input("enter the element of an array: ")
// }
// let target = Number(input("enter the target: "))
// let p = 0
// for(let i = 0; i<arr2.length; i++){
//     if(arr2[i] == target){
//         console.log("YES");
//         p++
    
//     }
// }
// if(p==0){
//     console.log("NO");
// }

//Write a program to print the sum of all the odd numbers and even numbers in the given array.
//Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// const input = require('prompt-sync')()
// let arr2 = [];
// let n = Number(input("enter the size of an array: "))
// odd_sum = 0
// even_sum = 0

// for(let i = 0; i<n; i++){
//     arr2[i] = Number(input("enter the elemts of an array: "))
// }
// for(let i = 0; i<arr2.length; i++){
//     if(arr2[i]%2 == 0){
//         even_sum+= arr2[i]
//     }
//     else{
//         odd_sum += arr2[i]
//     }
// }
// console.log(`even sum =`, even_sum);
// console.log(`odd sum =`, odd_sum);


// Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

// const input = require('prompt-sync')();
// let arr3 = [];
// let n = Number(input("enter the size of array: "));

// for(let i = 0; i<n; i++){
//     arr3[i] = Number(input("enter the elements of an array: "))
// }
// for(let i = 0; i<arr3.length-1; i++){
//     if(arr3[i] != 0){
//         let count = 0
//         for(let j = i+1; j<arr3.length; j++){
//             if(arr3[i] == arr3[j]){
//                 count++;
//                 arr3[j] = 0;
//             }
//         }
//         if(count>0){
//             console.log(arr3[i]);
//         }
    
//     }
    
//  }

// Write a program to take N numbers from the user and print the frequency of every number.

// const input = require('prompt-sync')();
// let array = [];
// let n = Number(input("enter the size of array: "));


// for(let i = 0; i<n; i++){
//     array[i] = Number(input("enter the element of an array: "))
// }
// for(let i = 0; i<array.length; i++){
//     if(array[i] != 0){
//         let count = 1;
//         for(let j = i+1; j<array.length; j++){
//             if(array[i] == array[j]){
//                 count++;
//                 array[j] = 0;
//             }
//         }
//         console.log(`${array[i]} =`, count);
        
//     }
// }


// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

// const input = require('prompt-sync')();
// let array = [];
// let n = Number(input("enter the size of N array: "))

// for(let i = 0; i<n; i++){
//     array[i] = Number(input("enter the element of N array: "))
// }
// let array1 = [];
// let m = Number(input("enter the size of M array: "))

// for(let i = 0; i<m; i++){
//     array1[i] = Number(input("enter the elementa of M array: "))  
// }
// let merge_array = array.concat(array1)
// let temp;

// for(let i = 0; i<merge_array.length; i++){
//     for(let j = i+1; j<merge_array.length; j++){
//         if(merge_array[i]>merge_array[j]){
//             temp = merge_array[i];
//             merge_array[i] = merge_array[j]
//             merge_array[j] = temp 
//         }
        
//     }
// }
// console.log(merge_array);


// by using array.sort() method in js :-

// const input = require('prompt-sync')();
// let array = [];
// let n = Number(input("enter the size of N array: "))

// for(let i = 0; i<n; i++){
//     array[i] = Number(input("enter the element of N array: "))
// }
// let array1 = [];
// let m = Number(input("enter the size of M array: "))

// for(let i = 0; i<m; i++){
//     array1[i] = Number(input("enter the elementa of M array: "))  
// }
// let merge_array = array.concat(array1)

// let compare = (a,b)=>{
//     return a - b
// }
// console.log(merge_array.sort(compare));

// Write a program to take value N from the user and print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]

// const input = require('prompt-sync')();
// let array = []
// let n = Number(input("enter the size of an array: "));

// for(let i = 0; i<n; i++){
//     array[i] = Number(input("enter the elements of an array: "))
// }
// for(let i = 0; i<array.length; i++){
//     let str = ""
//     for(let j = 0; j<array[i]; j++){
//         str+=">"
//     }
//     console.log(str);


// const prompt=require('readline-sync')
// let a =prompt.question('enter the name');
// console.log(a)

const input = require('readline-sync')
let a = input.questionInt("enter :- ")
console.log(a);
