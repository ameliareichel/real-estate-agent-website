const hamburger = document.querySelector('.hamburger-menu');
const navigationList = document.querySelector('.nav-list');

const menuToggle = () => {
    navigationList.classList.toggle('unfolded-menu');
    hamburger.classList.toggle('color-change');
}
hamburger.addEventListener('click', menuToggle);