const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => grades.reduce((a,b) => a + b) / grades.length;

console.log(average());