

function disp(n) {
    var obj = document.getElementById("result");  //resultを取得
    obj.value += n;　//文字列を足していく
}

function enter() {
    var obj = document.getElementById("result");  //resultを取得
    obj.value = eval(obj.value);  //どの文字列もプログラムできるようにする
}
function clearr() {
    var obj = document.getElementById("result");  //resultを取得
    obj.value = "";
}

document.onkeydown = function (e) {
    var keyCode = false;

    if (e) ev = e;

    if (ev) {
        if (ev.keyCode) {
            keyCode = ev.keyCode;
        } else if (ev.which) {
            keyCode = ev.which;
        }
    }

    if (keyCode === 13) {
        var obj = document.getElementById("result");  //resultを取得
        const elem = document.activeElement;  // 現在forcsしているものを取得
        elem.blur(); //現在forcsしているものを解除
        obj.value = eval(obj.value);  //どの文字列もプログラムできるようにする
    }
}