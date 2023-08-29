// Получаем элементы управления размером шрифта.
const fontControls = document.querySelectorAll('.font-size');

// Получаем элемент читалки.
const book = document.querySelector('#book');

// Проходимся по каждому элементу управления размером шрифта.
fontControls.forEach(control => {
  // Вешаем на него обработчик клика.
  control.addEventListener('click', (event) => {
    event.preventDefault();
    // Удаляем класс font-size_active у всех элементов управления размером шрифта.
    fontControls.forEach(control => {
      control.classList.remove('font-size_active');
    });
    // Добавляем класс font-size_active только на текущий элемент.
    control.classList.add('font-size_active');
    // Получаем значение атрибута data-size текущего элемента.
    const size = control.getAttribute('data-size');
    // Удаляем все классы размера шрифта у элемента читалки.
    book.classList.remove('book_fs-big', 'book_fs-small');
    // Добавляем соответствующий класс размера шрифта в зависимости от выбранного значения.
    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});