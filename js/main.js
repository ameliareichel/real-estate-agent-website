const hamburger = document.querySelector('.hamburger-menu');
const navigationList = document.querySelector('.nav-list');

const arrowUp = document.querySelector('.arrow-up');

//Menu toggle function:
const menuToggle = () => {
    navigationList.classList.toggle('unfolded-menu');
    hamburger.classList.toggle('color-change');
}


//Function turning off menu, while clicking anywhere in the window object:
const menuOff = (event) => {
    if (event.target !== hamburger && hamburger.classList.contains('color-change')) {
        navigationList.classList.remove('unfolded-menu');
        hamburger.classList.toggle('color-change');
    }
}

hamburger.addEventListener('click', menuToggle);
window.addEventListener('click', menuOff);


//Arrow up show function:
const arrowUpShow = () => {
    if (window.scrollY >= 70) {
        arrowUp.style.display = 'block';
    }
    else {
        arrowUp.style.display = 'none';
    }
};

window.addEventListener('scroll', arrowUpShow);