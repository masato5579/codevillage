const body = document.body;
const h1 = document.createElement('h1');
const p = document.createElement('p');
const h2 = document.createElement('h2');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');


function trees(treechild, childcontent) {
    tree = body.appendChild(treechild);
    if (childcontent == '') {
        tree.textContent = '';
    } else {
        tree.textContent = childcontent;
    }
}

function ull(ulchild, ulcontent) {
    const uls = ul.appendChild(ulchild);
    uls.textContent = ulcontent;
}

trees(h1, 'DOM');
trees(p, 'JavascriptからHTMLを扱うための仕組み');
trees(h2, '印象に残っているトピック');
trees(ul, '');
ull(li1, 'documentオブジェクト');
ull(li2, 'getElementById');
ull(li3, 'イベントリスナ');