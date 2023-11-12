let menu= document.querySelector('#menu-icon');
let boutons= document.querySelector('.boutons');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    boutons.classList.toggle('open');
};
