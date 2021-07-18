import $ from "jquery";

const menu = $('.menu-js');
const burger = $('.burger-js');
burger.click(function (){
    $(this).children().toggleClass('burger-menu__burger_active');
    menu.toggleClass('header__navigation_active');
});
$(document).mouseup(function (e){
    if (!menu.is(e.target) && !burger.children().is(e.target)
        && menu.has(e.target).length === 0) {
        burger.children().removeClass('burger-menu__burger_active');
        menu.removeClass('header__navigation_active');
    }
});
