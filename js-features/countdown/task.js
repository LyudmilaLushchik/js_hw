const countDown = function() {
    const timer = document.getElementById('timer');
    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        clearInterval();
        alert("Вы победили в конкурсе!");           
    }
}

setInterval(countDown, 1000);