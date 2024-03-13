
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.lc-tabs__tab');
    const tabContents = document.querySelectorAll('.lc-tabs__content');

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            // Удаление активного класса у всех табов и контентов
            tabs.forEach(function(item) {
                item.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(function(item) {
                item.classList.remove('lc-tabs__content_visible');
            });

            // Добавление активного класса текущему табу и соответствующему контенту
            tab.setAttribute('aria-selected', 'true');
            tabContents[index].classList.add('lc-tabs__content_visible');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом .lc-spoiler-item
    var spoilerItems = document.querySelectorAll(".lc-spoiler-item");

    // Перебираем каждый элемент и назначаем обработчик события клика
    spoilerItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Удаляем класс .lc-spoiler-item_open у всех элементов
            spoilerItems.forEach(function(spoiler) {
                spoiler.classList.remove("lc-spoiler-item_open");
            });

            // Добавляем класс .lc-spoiler-item_open на выбранный элемент
            this.classList.add("lc-spoiler-item_open");
        });
    });
});
