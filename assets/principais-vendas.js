// Seleção dos elementos
const discountButtons = document.querySelectorAll('.btn-discount');
const modal = document.getElementById('discount-modal');
const closeBtn = document.querySelector('.close-btn');
const discountForm = document.getElementById('discount-form');

// Função para abrir o modal
function openModal() {
  modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = 'none';
}

// Evento de clique nos botões de desconto
discountButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

// Evento de clique no botão de fechar
closeBtn.addEventListener('click', closeModal);

// Evento de envio do formulário
discountForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Obrigado! Seu desconto será enviado por email.');
  closeModal();
});
