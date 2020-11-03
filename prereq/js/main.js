

function toggleNav() {
    const body = document.body;
    const hum = document.getElementById('js-hum');
    const blackBg = document.getElementById('js-black-bg');
    const menu = document.getElementById('jsMenu');
    const concept = document.getElementById('jsConcept');
    const access = document.getElementById('jsAccess');
    const reserve = document.getElementById('jsReserve');


    hum.addEventListener('click', function () {
        body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
    menu.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
    concept.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
    access.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
    reserve.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
}





toggleNav();