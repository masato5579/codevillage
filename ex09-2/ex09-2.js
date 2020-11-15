const add = document.getElementById('add');
const remove = document.getElementById('remove');
const list = document.getElementById('list');

add.addEventListener('click', (event) => {
    const listLi = document.createElement('li');
    const listImg = document.createElement('img');
    const listSpan = document.createElement('span');
    const listLength = list.childElementCount;

    list.appendChild(listLi);
    listLi.appendChild(listImg);
    listImg.setAttribute('src', 'http://placehold.it/64x64');
    listImg.setAttribute('alt', `アイテム${listLength + 1}`);
    listLi.appendChild(listSpan);
    listSpan.textContent = `アイテム${listLength + 1}`;
});

remove.addEventListener('click', (event) => {
    const listLength = list.childElementCount;
    if (listLength > 0) {
        list.removeChild(list.lastChild);
    }
});