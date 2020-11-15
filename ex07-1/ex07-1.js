//concat() method


var str1 = "こんにちは";
var name = "太郎さん";


console.log(str1.concat('', name));


//String.prototype.search();

var str2 = "hello World";
var W = /[A-Z]/;  //「g」grobalの「g」

console.log(str2.search(W));

//String.prototype.startsWith()

var str3 = "コーヒーは　美味しい";

console.log(str3.startsWith('コー')); //true
console.log(str3.startsWith('紅茶')); //false
console.log(str3.startsWith('は', 4)); //true
console.log(str3.startsWith('コーヒー', 6)); //false















