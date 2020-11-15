function scoring(score) {
    let result = '';
    if (score >= 90) {
        result = '秀';
    } else if (score >= 75) {
        result = '優';
    } else if (score >= 60) {
        result = '良';
    } else if (score >= 30) {
        result = '可';
    } else {
        result = '不可';
    }
    return result;
}

console.log(scoring(100));

console.log(scoring(75));

console.log(scoring(60));

console.log(scoring(30));

console.log(scoring(13));