    function isFirefox() {
        return typeof InstallTrigger !== 'undefined'; // Проверка на Firefox
    }

    if (isFirefox()) {
        // Убираем все содержимое страницы
        const contentElements = document.getElementsByClassName('content');
        for (let i = 0; i < contentElements.length; i++) {
            contentElements[i].style.display = 'none';
        }

        // Показываем сообщение о неподдерживаемом браузере
        const messageElements = document.getElementsByClassName('unsupported-message');
        for (let i = 0; i < messageElements.length; i++) {
            messageElements[i].style.display = 'block';
        }
    }