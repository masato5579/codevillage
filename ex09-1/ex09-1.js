const add = document.getElementById('add');
const remove = document.getElementById('remove');
const list = document.getElementById('list');

add.addEventListener('click', (event) => {
    const listLi = document.createElement('li');
    const listLength = list.childElementCount;

    list.appendChild(listLi);
    listLi.textContent = `アイテム${listLength + 1}`;
});

remove.addEventListener('click', (event) => {
    const listLength = list.childElementCount;
    if (listLength > 0) {
        list.removeChild(list.lastChild);
    }
});

