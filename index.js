const menu = document.getElementById("navBar");
const menuButton = document.getElementById("menuButton");
const menuIcon_open = document.getElementById('navImg-open');
const menuIcon_close = document.getElementById('navImg-close');

menuButton.onclick = function () {
    if(menu.style.right === '-300px') {
        menu.style.right = '20%'
        menuIcon_open.style.display = 'none'
        menuIcon_close.style.display = 'block'
    }else {
        menu.style.right = '-300px'
        menuIcon_close.style.display = 'none'
        menuIcon_open.style.display = 'block'
    }
}