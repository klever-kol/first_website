var counter = 0;

function counterDisplay(element) {
    counter++;
    var display = document.querySelector('#counter h1');
    if (display) {
        display.textContent = counter;
    } else {
        console.warn('Элемент #counter h1 не найден');
    }
}