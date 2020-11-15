//Array.from

console.log(Array.from('yonezukensi'));  //yonezukensiの一文字一文字を配列化

console.log(Array.from([83, 20, 30], x => x * x));  //xを2乗した数をxに返して、それらを全ての配列に反映させた

const yonezu = new Map([['sing1', 'Lemon'], ['sing2', 'Eine Kleine']]); //新しいインスタンスを作成し、

console.log(Array.from(yonezu.values()));  //その中の配列にある、値を取り出す

//Array.prototype.find()

const array1 = [30, 49, 100, 23, 369,];

const found = array1.find(element => element > 100);  //array1の配列の中の100より大きいもので一番100に近いものを抽出

console.log(found);

//Array.pop();

const drink = ['Coffee', 'OrangeJuice', 'AppleJuice', 'cola'];

console.log(drink.pop());//配列の一番最後の要素を取り出す