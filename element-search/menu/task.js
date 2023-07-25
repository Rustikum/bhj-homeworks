const menu = document.getElementsByClassName("menu__link");
const actMenu = document.getElementsByClassName("menu_main");
for (let i = 0; i < menu.length; i++) {
    menu.item(i).onclick = menuActiveToggle;
}

let actMenuAct = document.getElementsByClassName("menu_active");


function menuActiveToggle() {
    let parentEl = this.parentElement;
    let subMenu = parentEl.querySelector("ul.menu");
    
    if (subMenu) {
        subMenu.classList.toggle("menu_active");
        return false;
    }

}
