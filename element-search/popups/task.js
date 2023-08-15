const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseButtons = document.querySelectorAll('.modal__close');

// показываем окно modal_main при загрузке страницы
modalMain.classList.add('modal_active');

// закрываем окно при клике на кнопку закрытия
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.classList.remove('modal_active');
  });
});

// показываем окно modal_success при клике на кнопку "Сделать хорошо"
const showSuccessButton = document.querySelector('.show-success');
showSuccessButton.addEventListener('click', () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
});