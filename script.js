// Função para mostrar detalhes do animal
function mostrarDetalhes(animal) {
    alert('Você clicou no ' + animal + '! Explore mais sobre ele em breve.');
}

// Formulário de contato
const form = document.getElementById('form-contato');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada.');
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});