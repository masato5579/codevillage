const items = [
    { n: 100 },
    { a: { b: ['abc'] }, c: { 100: 'foobar' } }
];



console.log(items[0].n);
console.log(items[1].a.b[0]);
console.log(items[1].c['100']);

