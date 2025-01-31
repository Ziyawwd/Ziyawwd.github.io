document.addEventListener('DOMContentLoaded', function() {
    // Пример обработки события клика на элемент с id "start-game"
    const startButton = document.getElementById('start-game');
    if (startButton) {
        startButton.addEventListener('click', function() {
            alert('Игра началась!');
            // Здесь можно добавить логику для начала игры
        });
    }

    // Пример анимации для элемента с классом "fade-in"
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s';
        element.style.opacity = 1;
    });
});