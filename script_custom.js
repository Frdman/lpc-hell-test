
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.lc-tabs__tab');
    const tabContents = document.querySelectorAll('.lc-tabs__content');

    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            // Удаление активного класса у всех табов и контентов
            tabs.forEach(function (item) {
                item.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(function (item) {
                item.classList.remove('lc-tabs__content_visible');
            });

            // Добавление активного класса текущему табу и соответствующему контенту
            tab.setAttribute('aria-selected', 'true');
            tabContents[index].classList.add('lc-tabs__content_visible');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы с классом .lc-spoiler-item
    var spoilerItems = document.querySelectorAll(".lc-spoiler-item");

    // Перебираем каждый элемент и назначаем обработчик события клика
    spoilerItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Удаляем класс .lc-spoiler-item_open у всех элементов
            spoilerItems.forEach(function (spoiler) {
                spoiler.classList.remove("lc-spoiler-item_open");
            });

            // Добавляем класс .lc-spoiler-item_open на выбранный элемент
            this.classList.add("lc-spoiler-item_open");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const burgerButtons = document.querySelectorAll('.lc-header-lpc-burger__burger-button');
    const burgerMenuWrap = document.querySelectorAll('.lc-header-lpc-burger__menu-wrapper');
    const burgerParanja = document.querySelectorAll('.lc-header-lpc-burger__paranja');
    const burgerMenu = document.querySelectorAll('.lc-header-lpc-burger__menu');


    burgerButtons.forEach(function (b) {
        b.addEventListener('click', function () {
            burgerButtons.forEach(function (item) {
                item.setAttribute('aria-expanded', 'true');
            });
            burgerMenuWrap.forEach(function (item) {
                item.classList.remove('lc-header-lpc-burger__menu-wrapper_hidden');
            });
            burgerParanja.forEach(function (item) {
                item.classList.add('lc-header-lpc-burger__paranja_opened');
            });
            burgerMenu.forEach(function (item) {
                item.classList.add('lc-header-lpc-burger__menu_opened')
            });
        })
    });

    burgerParanja.forEach(function (p) {
        p.addEventListener('click', function () {
            burgerButtons.forEach(function (item) {
                item.setAttribute('aria-expanded', 'false')
            });
            burgerMenuWrap.forEach(function (item) {
                item.classList.add('lc-header-lpc-burger__menu-wrapper_hidden')
            });
            burgerParanja.forEach(function (item) {
                item.classList.remove('lc-header-lpc-burger__paranja_opened')
            });
            burgerMenu.forEach(function (item) {
                item.classList.remove('lc-header-lpc-burger__menu_opened')
            });
        });
    });
});