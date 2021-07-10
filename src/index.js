import noUiSlider from 'nouislider';
import wNumb from './js/wNumb';
import "./styles/index.scss";
import $ from "jquery";

// let slider = document.getElementById('slider');
// noUiSlider.create(slider, {
//     start: [5000, 10000],
//     step: 10,
//     connect: true,
//     margin: 30,
//     range: {
//         'min': 0,
//         'max': 15700
//     },
//     format: wNumb({
//         decimals: 0,
//         thousand: ' ',
//         suffix: '₽'
//     })
// });
//
// const marginMin = document.getElementById('slider-margin-value-min'),
//       marginMax = document.getElementById('slider-margin-value-max');
//
// slider.noUiSlider.on('update', function (values, handle) {
//     if (handle) {
//         marginMax.innerHTML = values[handle];
//     } else {
//         marginMin.innerHTML = values[handle];
//     }
// });

$(document).ready(function(){
    /* guest input dropdown */
    const guestBlock = $(".guests-block-js");
    const guestDropdownButton = $(".guests-dropdown-button-js");
    const guestInput = $(".input-guests-js");
    const guestDropdown = $(".guests-dropdown-js");
    const guestClearBtn = $(".quest-clean-js");
    const allCounters = $(".guest-counter-js");
    /* show-hide dropdown*/
    guestDropdownButton.click(function (){
        guestDropdown.toggleClass("guests-input__dropdown-wrapper_active");
        guestInput.toggleClass("guests-input__input_active");
    });
    $(document).mouseup(function (e){
        if (!guestBlock.is(e.target)
            && guestBlock.has(e.target).length === 0) {
            guestDropdown.removeClass("guests-input__dropdown-wrapper_active");
        }
    });
    /* guest more button */
    const moreBtn =$(".more-js");
    moreBtn.click(function (){
        const lessBtn = $(this).siblings(".less-js");
        const counter = $(this).prev();
        if (counter.text() === "0") lessBtn.addClass("guests-input__button_active")
        counter.text(function (i, count){
            return ++count
        });
        changeInputValue();
    });
    /* guest less button */
    const lessBtn =$(".less-js")
    lessBtn.click(function (){
        const counter = $(this).next();
        if (+counter.text() > 0) {
            counter.text(function (i, count) {
                return --count
            })
        }
        if (counter.text() === "0") $(this).removeClass("guests-input__button_active");
        changeInputValue();
    });
    /* quest input validator */
    function changeInputValue() {
        let count = 0
        allCounters.text(function (z, x){
            count = count + +x
        })
        if ( count === 1) {
            guestClearBtn.addClass("guests-input__clean_active");
            guestInput.val(function (){
                return  "1 гость";
            })
        } else
        if (count > 1 && count < 5) {
            guestInput.val(function (){
                return `${count} гостя`;
            })
        } else
        if (count >= 5 ) {
            guestInput.val(function (){
                return `${count} гостей`;
            })
        } else {
            guestClearBtn.removeClass("guests-input__clean_active")
            guestInput.val(function (){
                return 'Сколько гостей';
            })
        }
    }
    /* clear form */
    guestClearBtn.click(function (){
        guestInput.val(function (){
            return "Сколько гостей";
        });
        lessBtn.removeClass("guests-input__button_active");
        guestClearBtn.removeClass("guests-input__clean_active");
        allCounters.text(function (){
            return "0"
        });
    });
    /* like button */
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
    /* EXPANDABLE CHECKBOX LIST */
    const checkboxBtn = $(".expandable-checkbox-button-js");
    const checkboxList = $(".expandable-checkbox-list-js");
    checkboxBtn.click(function (){
        checkboxList.fadeToggle(500)
        checkboxBtn.toggleClass("expandable-checkbox-list__list-opener_active")
    })
});