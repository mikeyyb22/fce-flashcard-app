// Let vs. Const
// // Both used to create variables
// // Let --> reassign
// // Const --> cannot reassign

let score = 0;
score = 10;
console.log(score); // 10

// used for counters, totals, values updated in loops, etc.

const name = "Sabrina";
// cannot reassign - name will always be Sabrina
// change in objects is permitted

const user = {
    name: "Sabrina",
    age: 30
};
user.age = 31; // allowed

// default to const, use let only when you know value will change
