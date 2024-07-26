const divisas = [
    { id: 1, nombre: "Dolar", descripcion: "Moneda oficial Estadounidense", precio: 1450, imagen: "https://img.freepik.com/foto-gratis/numero-banco_1232-3931.jpg" },
    { id: 1, nombre: "Euro", descripcion: "Moneda oficial Europea", precio: 1633, imagen: "https://www.ceca.es/wp-content/uploads/2023/08/euros.jpg" },
    { id: 1, nombre: "Real", descripcion: "Moneda oficial Brasileña", precio: 257, imagen: "https://media.istockphoto.com/id/1322173172/es/foto/en-esta-ilustración-fotográfica-se-muestran-ciento-doscientos-reales-y-una-moneda-de-un-real.jpg?s=612x612&w=0&k=20&c=9pG2yxdpFYe9j2oKboOqvwU9skbokYaIFW9Xn48FH_Y=" },
    { id: 1, nombre: "Peso Uruguayo", descripcion: "Moneda oficial Uruguaya", precio: 29, imagen: "https://st3.depositphotos.com/2870309/17334/i/450/depositphotos_173341030-stock-photo-uruguayan-pesos-a-background.jpg" },
]

function renderDivisas(divisas) {
    let contenidoHTML = '<div class="row">'; 

    for (const divisa of divisas) {
        contenidoHTML += `<div class="col-md-3 mb-4"> <!-- Añadido mb-4 para espacio entre filas -->
            <div class="card border-0">
                <img src="${divisa.imagen}" class="card-img-top" alt="${divisa.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${divisa.nombre}<br><span class="text-danger">$${divisa.precio} ARS</span></p>
                </div>
            </div>
        </div>`; 
    }

    contenidoHTML += '</div>'; 

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderDivisas(divisas)