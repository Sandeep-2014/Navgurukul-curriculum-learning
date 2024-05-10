// string is collection of characters.

// let name = "sandeep kumar"
// console.log(name.length); // it will give lenght of string.
// console.log(name.toUpperCase()); // it will convert whole string in upper case.
// console.log(name.slice(5,10)); // it will give the output of string from in range we gave.
// console.log(name.slice(3)); // it will give string after the given index number "output will be deep kumar"
// console.log(name.replace("kumar","yadav"));// by using "repletace" we can replace the string value and output will be "sandeep yadav"

// let freind = "deepak";
// console.log(freind.concat(" is a freind of ", name));// by using  "concat" we can join two string.

// let freind1 = "           ravi          ";
// console.log(freind1);
// console.log(freind1.trim()); // trim the space before of string and space after the string, it will not trim space if the space is between the string.



// let myName = "SANDEEP KUMAR";
// console.log(myName.toLowerCase()); // it will convert whole string in lower case.

// let name1 = "sandeep\n kumar"
// console.log(name1);// "/n" make new line in the string.()


let fr =  "Shikhar"
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// console.log(fr[4]);
// console.log(fr[5]);
// console.log(fr[6]);

// Q :- use a for loop to print a string

// for(let i = 0; i<fr.length; i++){
//     console.log(fr[i]);
// }

// Basic String Methods
// Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

// 1. JavaScript String Length
// The length property returns the length of a string:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lenght = text.length;
console.log(lenght);

// Extracting String Characters
// There are 4 methods for extracting string characters:
// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// 2(i) :- JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

let name = "Sandeep Kumar"
console.log(name.charAt(3));

// 2(ii) :- JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

let newName = "Sandeep YAdav"
console.log(newName.charCodeAt(7));

// JavaScript String at()
// ES2022 introduced the string method at():
// The at() method returns the character at a specified index (position) in a string.


let name1 = "Deepak"
console.log(name1.at(4));


// Property Access [ ]

let name2 = "Ravi Kumar"
console.log(name2[3]);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
//  substr(start, length)

// 3(i):- JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

let fruts = "Apple, Orange, Kiwi";
let part = fruts.slice(3, 8) // output:- le, O
console.log(part);
console.log(fruts);

// If you omit the second parameter, the method will slice out the rest of the string:

let part1 = fruts.slice(15) // output:- Kiwi
console.log(part1);

// If a parameter is negative, the position is counted from the end of the string:

let part2 = fruts.slice(-12)
console.log(part2); // Output: Orange, Kiwi

//This example slices out a portion of a string from position -12 to position -6:
let part3 = fruts.slice(-12, -6)
console.log(part3); // Output: Orange


// 3(ii):- JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "Apple, Orange, Kiwi";
let part4 = str.substring(7,13);
console.log(part4); // Output:Orange

// take start value less than "0"
let part5 = str.substring(-5, 13)
console.log(part5); // Output: Apple, Orange

// take end value less than "0"

part6 = str.substring(11, -2)
console.log(part6); // output:- Apple, Oran

// 3(iii):- JavaScript String substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the (first parameter dene ke baad kitne word nikalne hai vo number last second parameter me dene hai)

let str1 = "Apple, Banana, Kiwi"
let part7 = str1.substr(7, 7);
console.log(part7); // Output:Banana

// If you omit the second parameter, substr() will slice out the rest of the string.

let part8 = str1.substr(7);
console.log(part8); // Output:- Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string.

let part9 = str1.substr(-4);
console.log(part9); // Output:Kiwi


// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// 4(i):- JavaScript String toUpperCase()
let myName = "Sandeep Kumar"
let text1 = myName.toUpperCase();   
console.log(text1); 

//4(ii):- JavaScript String toLowerCase()
let myName1 = "SANDEEP KUMAR";  
let text2 = myName1.toLowerCase();    
console.log(text2); 

// 5:- JavaScript String concat()
// concat() joins two or more strings:

let name3 = "Sandeep"
let name4 = "Kumar"
let text3 = name3.concat(" ",name4);
console.log(text3) ; // Output: Sandeep Kumar

// Note
// All string methods return a new string. They don't modify the original string.
// Formally said: 
// Strings are immutable: Strings cannot be changed, only replaced.


// 6:- JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

let text4 = "          Sandeep Yadav       "
let Trim = text4.trim();
console.log(Trim);

// 6(i):- JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let Trim1 = text4.trimStart();
console.log(Trim1); 

// JavaScript String trimEnd()
// ECMAScript 2019 added the string method trimEnd() to JavaScript.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let Trim2 = text4.trimEnd();
console.log(Trim2);


// 7:- JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// 7(i):- JavaScript String padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// Pad a string with "2" until it reaches the length 5:
let str2 = "7"
let padded = str2.padStart(5,2)
console.log(padded); // output:- 22227

// Pad a string with "x" until it reaches the length 6:

let padded1 = str2.padEnd(6,"x")
console.log(padded1);

// Note
// The padStart() method is a string method. To pad a number, convert the number to a string first.

let num = 9 
let convertNum = num.toString();
let padded2 = convertNum.padStart(8,'0');
console.log(padded2); // output:- 00000009

// 8:- JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.


let myName2 = "Sandeep Yadav "
// Create copies of a text:
let repeatedText = myName2.repeat(3);
console.log(repeatedText); 


// 9:- Replacing String Content
// The replace() method replaces a specified value with another value in a string:

let  myString = "Sandeep Kumar";
let newText = myString.replace("a", "e" )
console.log(newText);   //output :- Sendeep Kumar

let newText1 = myString.replace("Kumar", "Yadav")
console.log(newText1);    //output :- Sandeep Yadav

// To replace all matches, use a regular expression with a /g flag (global match):

let newText2 = myString.replace(/a/g, "e")
console.log(newText2); // output :- Sendeep Kumer

// Note
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match.


// 10;- JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

let newText3 = 






