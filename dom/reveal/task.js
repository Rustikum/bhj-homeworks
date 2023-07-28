'use strict';

const orangeBox = document.getElementsByClassName('reveal');

window.addEventListener('scroll', function () {

    const viewportHeight = window.innerHeight;

    for (const element of orangeBox) {
        const block = element.getBoundingClientRect();
        element.classList.toggle('reveal_active', (block.top < viewportHeight) && (block.bottom > 0));
    }
})