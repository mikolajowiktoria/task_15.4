const average = (...args) => args.reduce((a,b) => a + b) / args.length;

console.log(average(6, 3, 8, 2));