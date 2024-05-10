// arrays are basically collections of some items. in one array we can write many names of fruits in single arry, we can put more than one object in a single array, in one array we can put some numbers, some booleans and some objects.
// so basically it is collection of items which we can access with index.

// let marks_class_12 = [98, 87, 76,45, 98, 46, 28, false, "not present"]
// marks_class_12[9] = 99
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]);

// print array with for loop

// for(let i = 0; i<marks_class_12.length; i++){
//     console.log(marks_class_12[i]);
// }

// array method

let num = [1, 2 , 3, 21, 6]
// console.log(num, typeof num);

// let b = num.toString(); // now "b" is a string "toString" convert a aray into string.
// console.log(b, typeof b);

// let c = num.join("-") // it will join "-" in every index in given array, The join() method returns an array as a string, The join() method does not change the original array.

// console.log(c, typeof c);

// a = num.pop(); // The pop() method removes (pops) the last element of an array, The pop() method changes the original array, The pop() method returns the removed element.

// console.log(num);
// console.log(a);

// let a = num.push(78); // The push() method adds new items to the end of an array, The push() method changes the length of the array, The push() method returns the new length.

// console.log(num, a);

// let r = num.shift(); // The shift() method removes the first item of an array, The shift() method changes the original array, The shift() method returns the shifted element.

// console.log(r, num);

// let q = num.unshift(89,70,50); // The unshift() method adds new elements to the beginning of an array.

// console.log(num, q);


// delete num[1] // "delete" will remove or delete that element from array, and lenght of the array will will not change. 
// console.log(num);
// console.log(num.length);
// console.log(num[1]);

// let num1 = [1, 4, 65, 34, 2, 45,];
// let num2 = [44, 45, 2, 46, 8, 9];
// let num3 = [76, 34, 42, 99];

// let newArray = num2.concat(num3, num1); // by using "concat" we can we can merge multiple arrays in one array.
// console.log(newArray);

// sort method

// let num5 = [1,45,3,67,78,98,2,9,0,15,11]
// num5.sort(); // "short" will sort the array in alphabetic order.
//console.log(num5);

// let compare = (a,b)=>{
//     return a - b
// }
// num5.sort(compare)// now the array will be sort in ascending order. if i will use "b - a" it will sort array in descending array
//console.log(num5);

// num5.reverse(); // "reverse" will reverse the array.
//console.log(num5);

// splice and slice

let num6 = [1,45,3,67,78,98,2,9,0,15,11]

// splice can be used to add new items to an array, The splice() method adds and/or removes array elements.
// splice add:-
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

// splice remove:-
// let deleteValues = num6.splice(2,3, 9890, 988, 990, 8900) // output ;- [1,45,9890,988,990,8900,98,2,9,0,15,11]
// console.log(num6, typeof num6);
// console.log(deleteValues, typeof deleteValues);// it will return the deleted value from the array when we use "splice"

//slice out a piece from an array it create a new array.
let num7 = [1,45,3,67,78,98,2,9,0,15,11]

// let newNum = num7.slice(-3,-1) // it will not update originle array so for that we have to take new variable 
// console.log(num7);
// console.log(newNum); // output;- 67,78,98,2,9,0,15,11


// array with for loop

let num8 = [4, 56, 78, 3]

// for(let i = 0; i<num8.length; i++){
//     console.log(num8[i]);
// }


// for each loop :- calls a  function, once for each array element
// its for each loop
// by using function we can print the sqare of every element in array. 
// another syntax of foreach loop:-
// num8.forEach(function(element){
//     console.log(element*element);
// })

// num8.forEach((element)=> {
//     console.log(element * element)
// })

// another example:-

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

// another exmple :-

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// array.from

// let name = "sandeep kumar"
// let arr = Array.from(name) // it will make an array from string
// console.log(arr);

// for.....of this loop work as for loop but this loop called sortcut of for loop and very easy also
// for(let i of num8){
//     console.log(i);
// }

// for....in this will also work as for loops 
// for(let i in num8){
//     console.log(num8[i]);
// }



// higher order array method :- map, filter, reduce

// map() method :- create a new array by performing some operation on each array element.

// let arr1 = [45, 23, 21]

// let a = arr1.map((value, index, array)=>{
//     console.log(value, index, array);
//     return value + 1
// })

// console.log(a);
// console.log(arr1);

// array filter method :- filter an array with values that passes a test creat a new array it will not modify the the orignle array.

// let arr2 = [76,5,34,3,78,9,6]
// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2);
// console.log(arr2);


// array reduce method :- reduce an array to a single value.

// let arr3 = [34,56,4,67,5,4,42,90,2]
// let newarr3 = arr3.reduce((a1, a2)=>{
//     return a1 +  a2
// })
// console.log(newarr3);
// console.log(arr3);