let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
 
cookie.addEventListener("click", function() {
    if (counter.textContent % 2 !== 0) {
        cookie.width *= 1.2;
        counter.textContent++;
    } else {
        cookie.width /= 1.2;
        counter.textContent++;
    }
});