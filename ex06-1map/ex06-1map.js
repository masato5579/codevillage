const items = [
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
    let sum = 0;

    item.forEach((item2) => {
        sum += item2;
    });
    return sum;
});

console.log(sums);