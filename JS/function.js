// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function product(a, b) { 
    mul = a*b;
    return mul;
}

console.log(product(5,6))

// OR
let pro = product(4,9);
console.log(pro);


// Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => {
        sum = a+b;
        return sum
}

console.log(myFunction(2,3));

let newSum = myFunction(7,10);
console.log(newSum);



