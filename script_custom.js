
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.lc-tabs__tab');
    const tabContents = document.querySelectorAll('.lc-tabs__content');

    // Находим индекс активного таба при загрузке страницы
    let activeTabIndex = Array.from(tabs).findIndex(tab => tab.getAttribute('aria-selected') === 'true');

    // Показываем соответствующий контент при загрузке страницы
    tabContents[activeTabIndex].classList.add('lc-tabs__content_visible');
    tabs[activeTabIndex].classList.add('lc-tabs__tab_active');
    tabs[activeTabIndex].style.borderColor = '#C2F23C'; // Устанавливаем стиль для активного таба

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            // Убираем класс активности и стиль у всех табов и контента
            tabs.forEach(function(item) {
                item.setAttribute('aria-selected', 'false');
                item.classList.remove('lc-tabs__tab_active');
                item.style.borderColor = ''; // Удаляем стиль у всех табов
            });
            tabContents.forEach(function(item) {
                item.classList.remove('lc-tabs__content_visible');
            });

            // Добавляем класс активности и стиль только текущему табу и соответствующему контенту
            tab.setAttribute('aria-selected', 'true');
            tabContents[index].classList.add('lc-tabs__content_visible');
            tab.classList.add('lc-tabs__tab_active');
            tab.style.borderColor = '#C2F23C'; // Устанавливаем стиль для текущего таба
        });
    });

    var spoilerItems = document.querySelectorAll(".lc-spoiler-item");

    // Перебираем каждый элемент и назначаем обработчик события клика
    spoilerItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Проверяем, имеет ли элемент класс .lc-spoiler-item_open
            var isOpen = this.classList.contains("lc-spoiler-item_open");

            // Удаляем класс .lc-spoiler-item_open у всех элементов
            spoilerItems.forEach(function(spoiler) {
                spoiler.classList.remove("lc-spoiler-item_open");
            });

            // Если элемент не был открыт, то открываем его
            if (!isOpen) {
                this.classList.add("lc-spoiler-item_open");
            }
        });
    });



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

