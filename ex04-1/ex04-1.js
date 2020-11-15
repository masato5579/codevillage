function cointoss() {
    const num = Math.random();

    if (num <= 0.5) {
        console.log('表');
    } else {
        console.log('裏');
    }

}

for (let i = 0; i < 10; i++) {
    cointoss();
} 