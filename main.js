let nav = document.querySelector('nav'), tabLinks = document.querySelectorAll('.tab-tit p'), tabContents = 
    document.querySelectorAll('.tab-contents');

document.querySelector('#open-menu').onclick = () => {
    nav.style.right = '0';
}
document.querySelector('#close-menu').onclick = () => {
    nav.style.right = '-260px';
}

function openTab(tabName) {
    for (item of tabLinks) {
        item.classList.remove('active-link');
    }
    for (item of tabContents) {
        item.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}