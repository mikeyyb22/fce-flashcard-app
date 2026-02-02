// arrow functions are shorter and cleaner than
// traditional functions

// traditional:
function add(a, b) {
    return a + b;
}

// arrow:
const add = (a, b) => {
    return a + b;
};

// arrow functions:
// 1. easier readability
// 2. small, focused functions (work best when functions do one thing)
// 3. different "this" behavior

const multiply = (a, b) => {
    return a * b;
};
const square = x => {
    return x * x;
}; // only one parameter, parenthesis optional
const sayHi = () => {
    console.log("Hi!");
};

// if function body is one line, you can:
// remove {} and return
// ex:
const add = (a, b) => a + b;

// arrow functions with objects:
const createUser = () => ({
    name: "Sabrina"
});
// parenthesis tell js that this is an object

const greet = (name) => {
    return "Hello " + name;
}
// same as
const greet2 = name => `Hello ${name}`;