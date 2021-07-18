import $ from "jquery";

$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navClass: ["custom-nav", "custom-nav"],
    navContainerClass: "custom-container-nav",
    dotsClass: "custom-container-dots",
    dotClass: "custom-dots"
});
