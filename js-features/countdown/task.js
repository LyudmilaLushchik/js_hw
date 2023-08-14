const countDown = function() {
    const timer = document.getElementById('timer');
    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");           
    }
}

const timerId = setInterval(countDown, 1000);