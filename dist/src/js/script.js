const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');

    hamburger.addEventListener('click', (event) => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
});

document.querySelectorAll('.menu_item').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })
})