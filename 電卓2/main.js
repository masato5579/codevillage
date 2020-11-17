

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

    if (e) event = e;

    if (event) {
        if (event.keyCode) {
            keyCode = event.keyCode;
        } else if (event.which) {
            keyCode = event.which;
        }
    }

    if (keyCode === 13) {
        var obj = document.getElementById("result");  //resultを取得
        var objV = obj.value;
        obj.value = eval(obj.value);  //どの文字列もプログラムできるようにする
        obj.value.slice(-1);
    }
}