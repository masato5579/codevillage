const pull5 = x => x - 5;
const mul100 = x => x * 100;
const add3 = x => x + 3;
const mul8 = x => x * 8;

const n = 3;

console.log(pull5(mul100(n)));
console.log(add3(mul8(add3(n))));