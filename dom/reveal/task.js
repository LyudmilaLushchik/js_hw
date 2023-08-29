// Получаем все блоки с классом reveal на странице.
const reveals = document.querySelectorAll('.reveal');

// Вешаем на объект window обработчик клика.
window.addEventListener('scroll', () => {
  // Проходимся по каждому блоку с классом reveal.
  reveals.forEach(reveal => {
    // Получаем Y-координату верхней границы элемента.
    const revealTop = reveal.getBoundingClientRect().top;
    // Получаем высоту области просмотра окна браузера.
    const windowHeight = window.innerHeight;
    
    if (revealTop < windowHeight) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
});