window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        btnCallMenu = document.querySelector('.hamburger'),
        btnCloseMenu = document.querySelector('.menu__close');

    btnCallMenu.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

    window.addEventListener('click', e => {
        const parent = e.target.parentNode;
        if (e.target.classList.contains('menu__overlay') || parent === btnCloseMenu || parent.tagName == 'svg') {
            menu.classList.toggle('menu_active');
        }
    });
});