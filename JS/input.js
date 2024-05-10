const input = require('prompt-sync')();
let age=input("Enter the age:");

if(age>18) {
    console.log("valid");
}else {
    console.log("not valid");
}

let number=input("enter the number:")
if(number>=0){
    console.log("positive")
}
else{
    console.log("negative")
}