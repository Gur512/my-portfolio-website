'use strict';

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

const button = select('.btn');

if (button) {
    listen('click', button, function() {
        window.location.href = 'mailto:gurpreetkaur1236545@gmail.com';
    });
} else {
    console.error('button not available');
}

