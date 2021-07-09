import noUiSlider from 'nouislider';
import wNumb from './js/wNumb'
import "./styles/index.scss";
import $ from "jquery";



let slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    step: 10,
    connect: true,
    margin: 30,
    range: {
        'min': 0,
        'max': 15700
    },
    format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
    })
});

const marginMin = document.getElementById('slider-margin-value-min'),
    marginMax = document.getElementById('slider-margin-value-max');

slider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        marginMax.innerHTML = values[handle];
    } else {
        marginMin.innerHTML = values[handle];
    }
});

$(document).ready(function(){
    const isLike = $(".like-js");
    const activeClass = 'likes-button_active';
    isLike.click(function(e){
        if ($(this).hasClass(activeClass)){
            $(this).text(function (i, b){
                return --b
            })
        } else {
            $(this).text(function (i, b){
                return ++b
            })
        }
        $(this).toggleClass(activeClass)
    });
});


/*
const isLike = document.querySelectorAll('.like-js')

isLike?.forEach(block => likeToggle(block) )

function likeToggle(block){
    block.addEventListener("click", () => {
        block.classList.contains("likes-button_active")
            ? --block.innerHTML
            : ++block.innerHTML
        block.classList.toggle("likes-button_active");
    });
}
*/


