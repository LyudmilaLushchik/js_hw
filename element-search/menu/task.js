const links = document.querySelectorAll('.menu__link');

for (let link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const subMenu = link.nextElementSibling;
    const activeMenu = document.querySelector('.menu_active');
    if (activeMenu && activeMenu !== subMenu) {
      activeMenu.classList.remove('menu_active');
    }
    if (subMenu) {
      subMenu.classList.toggle('menu_active');
    } else {
      window.location.href = link.href;
    }
  });
}