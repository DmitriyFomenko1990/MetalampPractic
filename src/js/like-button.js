import $ from "jquery";

const isLike = $(".like-js");
const activeClass = "likes-button_active";
isLike.click(function(){
    if ($(this).hasClass(activeClass)){
        $(this).text(function (i, count){
            return --count
        })
    } else {
        $(this).text(function (i, count){
            return ++count
        })
    }
    $(this).toggleClass(activeClass);
});
