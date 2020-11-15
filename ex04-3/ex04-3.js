const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65];

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

scores.forEach((score) => {
    console.log(scoring(score));
});