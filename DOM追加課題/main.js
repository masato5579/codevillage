
//style
const body = document.body;
const section = document.querySelector('section');

let div1 = document.createElement('div');
let Img = document.createElement('img');
section.appendChild(div1);
div1.appendChild(Img);

div1.style.width = '100%';
div1.style.margin = '0 auto';
Img.style.width = '200px';

for (let i = 0; i < 2; i++) {
    let p2 = document.createElement('p');
    div1.appendChild(p2);
}

let div1C1 = div1.children[1];
let div1C2 = div1.children[2];



//yesかnoか
function yn() {
    let fun = document.querySelector('.fun');
    let yes = document.querySelector('#yes');
    let no = document.querySelector('#no');
    let p1 = document.createElement('p');

    yes.addEventListener('click', function (event) {
        p1.textContent = 'どんだけ〜';
        fun.appendChild(p1);
        no.checked = false;
    });

    no.addEventListener('click', function (event) {
        p1.textContent = 'まぼろし〜';
        fun.appendChild(p1);
        yes.checked = false;
    });

}



//鬼滅選択
function kimetu() {
    let onigari = document.querySelector('#onigari');
    let num = onigari.selectedIndex;

    let oni = onigari.options[num].value;

    Img.getAttribute('src');


    if (oni === 'tanzirou') {
        Img.setAttribute('src', './img/tanzirou.jpeg');
        div1C1.textContent = '水の呼吸';
        div1C2.textContent = '火の神かぐら';
    } else if (oni === 'zenitu') {
        Img.setAttribute('src', './img/zenitu.jpeg');
        div1C1.textContent = '雷の呼吸';
        div1C2.textContent = '';
    } else if (oni === 'inosuke') {
        Img.setAttribute('src', './img/inosuke.jpeg');
        div1C1.textContent = '獣の呼吸';
        div1C2.textContent = '';
    }
}


yn();//yesかnoか



