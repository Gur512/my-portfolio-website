'use strict';

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

const button = select('.btn');
// const listIcon = select('.menu-toggle');
const nav = select('nav ul');

if (button) {
    listen('click', button, function() {
        window.location.href = 'mailto:gurpreetkaur1236545@gmail.com';
    });
} else {
    console.error('button not available');
}

// listen ('click', listIcon, () => {
//     nav.classList.toggle('active');
// });
