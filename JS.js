const url = `https://carlosreneas.github.io/endpoints/cartas.json`;

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            generarTabla(jsonResponse);
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    }
}

function generarTabla(json) {
    const tabla = document.getElementById("tabla")
    console.log(json);
    const arr = json.data;

    arr.forEach(carta => {
        const tr = document.createElement('tr');

        const tdNumero = document.createElement('td');
        tdNumero.textContent = carta.numero;
        tr.appendChild(tdNumero);

        const tdNombre = document.createElement('td');
        tdNombre.textContent = carta.carta;
        tr.appendChild(tdNombre);

        const tdValor = document.createElement('td');
        tdValor.textContent = carta.valor;
        tr.appendChild(tdValor);

        tabla.appendChild(tr);
    });
}

function guardarCarta(numero, carta) {
    if (!localStorage.getItem(numero)) {
        //CREAMOS LA VARIABLE DE LOCALSTORAGE
        carta = { numero: numero, carta: carta };
        localStorage.setItem(carta, JSON.stringify(carta));

        let dataStorage = JSON.parse(localStorage.getItem(numero));

        dataStorage.numero = dataStorage.numero + 1;
        localStorage.setItem(numero, JSON.stringify(dataStorage));

    } else {
        let dataStorage = JSON.parse(localStorage.getItem(numero));
        dataStorage.numero = dataStorage.numero + 1;

        localStorage.setItem(numero, JSON.stringify(dataStorage));
    }
}

guardarCarta(6, "As de corazones");

document.getElementById("guardar").onclick = function () {
    guardarCarta()
}

getData(url);




