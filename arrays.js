// map

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
// makes new array, doesn't change original
console.log(doubled); // [2, 4, 6]

// filter

const ages = [12, 18, 25, 14];
const adults = ages.filter(age => age >= 18);
// makes new array that takes out numbers under 18
console.log(adults); // [18, 25]

// reduce

const nums = [1, 2, 3];
const total = nums.reduce((sum, n) => {
    return sum + n;
}, 0);
// sum --> accumulator (starts at 0)
// n --> current item
// makes new array

// map is NOT forEach
// forEach does not return or create anything

