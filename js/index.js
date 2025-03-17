const menu = document.getElementById("navBar");
const menuButton = document.getElementById("menuButton");
const menuIcon_open = document.getElementById('navImg-open');
const menuIcon_close = document.getElementById('navImg-close');

menuButton.onclick = function () {
    if(menu.style.right === '-500px') {
        menu.style.right = '25%'
        menuIcon_open.style.display = 'none'
        menuIcon_close.style.display = 'block'
    }else {
        menu.style.right = '-500px'
        menuIcon_close.style.display = 'none'
        menuIcon_open.style.display = 'block'
    }
}