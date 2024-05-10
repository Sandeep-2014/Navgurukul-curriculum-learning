const car = {type:"Fiat", model:"500", color:"white"};

console.log(car.type); // Fiat
console.log(car.model); // 500
console.log(car.color); // white

// object can also declare also loke this

const person = {
    firstName: "Sandeep Kumar",
    lastName: "Yadav",
    age: "21",
    city: "Delhi",
    education: "12th Pass"
};

console.log(`My first name is ${person.firstName}`);
console.log(`My lsdt name is ${person.lastName}`);
console.log(`My age is ${person.age}`);
console.log(`My city is ${person.city}`);
console.log(`My education is ${person.education}`);

// we also access the object like this

console.log(`My first name is ${person["firstName"]}`);
console.log(`My last name is ${person["lastName"]}`);
console.log(`My age name is ${person["age"]}`);
console.log(`My city name is ${person["city"]}`);
console.log(`My education name is ${person["education"]}`);

