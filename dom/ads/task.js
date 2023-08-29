// Получаем все ротаторы на странице.
const rotators = document.querySelectorAll('.rotator');

// Проходимся по каждому ротатору.
rotators.forEach(rotator => {
  // Получаем все текстовые блоки внутри ротатора.
  const cases = rotator.querySelectorAll('.rotator__case');
  // Устанавливаем индекс активного блока.
  let activeCaseIndex = 0;
  
  // Запускаем бесконечный цикл смены блоков.
  setInterval(() => {
    // Скрываем предыдущий активный блок.
    cases[activeCaseIndex].classList.remove('rotator__case_active');
    // Увеличиваем индекс активного блока.
    activeCaseIndex++;
    // Если индекс стал больше, чем количество блоков, то обнуляем его.
    if (activeCaseIndex >= cases.length) {
      activeCaseIndex = 0;
    }
    // Показываем новый активный блок.
    cases[activeCaseIndex].classList.add('rotator__case_active');
  }, 1000);
});