const url = `https://carlosreneas.github.io/endpoints/cartas.json`;

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return console.log(jsonResponse);
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
}

function generarTabla(json) {
    const tabla = document.getElementById("tabla")
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

const data = getData(url);
generarTabla(data);