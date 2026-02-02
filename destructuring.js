const user = {
    name: "Sabrina",
    age: 26,
    country: "Brazil"
};

const { name, age } = user;
// renaming while destructuring:
// const { name: userName, age: userAge} = user;
// console.log(userName);

//default values
const { role = "student" } = user;
// if role doesn't exist --> "student"

// arrays - must go in order
const colors = ["red", "blue", "green"];
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "blue"

// skipping items
const numbers = [10, 20, 30];
const [ , secnd ] = numbers;
console.log(secnd) // 20
