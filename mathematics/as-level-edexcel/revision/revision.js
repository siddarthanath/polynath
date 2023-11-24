// script.js

document.addEventListener('DOMContentLoaded', () => {
    const expandBtn = document.querySelector('.expand-btn');
    const content = document.querySelector('.content');

    expandBtn.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

function redirectToURL(url) {
    window.location.href = url;
}
