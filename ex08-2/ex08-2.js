const body = document.body;

function ex082() {
    var Eh1 = document.createElement('h1');
    var Ep = document.createElement('p');
    var Eh2 = document.createElement('h2');
    var Eul = document.createElement('ul');
    var Eli1 = document.createElement('li');
    var Eli2 = document.createElement('li');
    var Eli3 = document.createElement('li');
    var Eh1TEXT = document.createTextNode('DOM');
    var EpTEXT = document.createTextNode('JavaScriptからHTMLを扱うための仕組み');
    var Eh2TEXT = document.createTextNode('印象に残っているトピック');
    var EliTEXT1 = document.createTextNode('documentオブジェクト');
    var EliTEXT2 = document.createTextNode('getElementById');
    var EliTEXT3 = document.createTextNode('イベントリスナ');

    body.appendChild(Eh1);
    Eh1.appendChild(Eh1TEXT);

    body.appendChild(Ep);
    Ep.appendChild(EpTEXT);

    body.appendChild(Eh2);
    Eh2.appendChild(Eh2TEXT);

    body.appendChild(Eul);
    Eul.appendChild(Eli1);
    Eul.appendChild(Eli2);
    Eul.appendChild(Eli3);
    Eli1.appendChild(EliTEXT1);
    Eli2.appendChild(EliTEXT2);
    Eli3.appendChild(EliTEXT3);
}

ex082();


