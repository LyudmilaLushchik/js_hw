let score = document.getElementById('dead');
let misses = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
        score.textContent++;
    } else {
        misses.textContent++;
    }
    if (Number(score.textContent) === 10) {
        alert('Вы победили!');
        score.textContent = 0;
        misses.textContent = 0;
        return;
    }
    if (Number(misses.textContent) === 5) {
        alert('Вы проиграли!');
        score.textContent = 0;
        misses.textContent = 0;
        return;
    }
  });
});