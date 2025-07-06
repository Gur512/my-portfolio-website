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

const sidebar = select('.sidebar');
const hideIcon = select('.hidden-icon');
const menuIcon = select('.menu-button');

listen('click', menuIcon, () => {
    sidebar.style.display = 'flex';
});

listen('click', hideIcon, () => {
    sidebar.style.display = 'none';
});

/* Toggle logic */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
