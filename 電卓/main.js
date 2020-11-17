var EnterFlag = false;

function disp(n) {
    var obj = document.getElementById("result"); //resultを取得
    obj.value += n; //resultのvalueをdispの引数たす
}

function kata(waza) {
    var obj = document.getElementById("result"); //resultを取得
    obj.value = waza;  //resultのvalueを壱ノ型 水面斬りに
}

function enter() {
    var obj = document.getElementById("result"); //resultを取得
    const colorChange = obj.style.color = "#13588B";
    obj.value = eval(obj.value); //evalとは文字列でもプログラミングコードとして機能させる

    if (obj.value == 1) {
        setTimeout(kata('壱ノ型 水面斬り'), 1000);
        colorChange;
    } else if (obj.value == 2) {
        setTimeout(kata('弐ノ型 水車'), 1000);
        colorChange;
    } else if (obj.value == 3) {
        setTimeout(kata('参ノ型 流流舞い'), 1000);
        colorChange;
    } else if (obj.value == 4) {
        setTimeout(kata('肆ノ型 打ち潮'), 1000);
        colorChange;
    } else if (obj.value == 5) {
        setTimeout(kata('伍ノ型 干天の慈雨'), 1000);
        colorChange;
    } else if (obj.value == 6) {
        setTimeout(kata('陸ノ型 ねじれ渦'), 1000);
        colorChange;
    } else if (obj.value == 7) {
        setTimeout(kata('漆ノ型 雫波紋突き'), 1000);
        colorChange;
    } else if (obj.value == 8) {
        setTimeout(kata('捌ノ型 滝壷'), 1000);
        colorChange;
    } else if (obj.value == 9) {
        setTimeout(kata('玖ノ型 水流飛沫・乱'), 1000);
        colorChange;
    } else if (obj.value == 10) {
        setTimeout(kata('拾ノ型 生生流転'), 1000);
        colorChange;
    } else if (obj.value == 11) {
        setTimeout(kata('拾壱ノ型 凪'), 1000);
        colorChange;
    } else if (obj.value == 12) {
        setTimeout(kata('ヒノカミ神楽 円舞'), 1000);
        obj.style.color = "#862718";
    }
}

function clearr() {
    var obj = document.getElementById("result"); //resultを取得
    obj.value = "";  //resultのvalueを空白に
}