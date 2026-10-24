const form = document.getElementById('form-recolha');
const listaRecolhas = document.getElementById('lista-recolhas');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const morada = document.getElementById('morada').value;
    const material = document.getElementById('material').value;
    const data = document.getElementById('data').value;

    const emptyMsg = document.querySelector('.empty-msg');
    if (emptyMsg) {
        emptyMsg.remove();
    }

    const card = document.createElement('div');
    card.classList.add('card-recolha');
    
    const dataFormatada = new Date(data).toLocaleDateString('pt-PT');

    card.innerHTML = `
        <strong>Material:</strong> ${material} <br>
        <strong>Morada:</strong> ${morada} <br>
        <strong>Data Agendada:</strong> ${dataFormatada}
    `;

    listaRecolhas.appendChild(card);

    form.reset();
});