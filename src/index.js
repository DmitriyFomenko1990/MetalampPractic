import "./styles/index.scss";
import $ from "jquery";
import "./js/jquery/jquery-ui";
import 'owl.carousel';
import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import ShortcutButtonsPlugin from "shortcut-buttons-flatpickr/dist/shortcut-buttons-flatpickr";
import "./js/jquery/item-quantity-dropdown.min"

flatpickr("#datepicker-interval", {
    "locale": Russian,
    mode: "range",
    dateFormat: "d M",
    closeOnSelect: false,
    monthSelectorType: "static",
    yearSelectorType: "static",
    nextArrow : "",
    prevArrow : "",
    plugins: [
        new rangePlugin({
            input: "#secondRangeInput"
        }),
        ShortcutButtonsPlugin({
            button: [{
                label: 'очистить',
            },
                {
                    label: 'применить',
                },],
            onClick: (index, fp) => {
                fp.clear();
                fp.close();
            }
        }),
    ],
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],
});
flatpickr("#datepicker1", {
    "locale": Russian,
    mode: "range",
    dateFormat: "d M",
    closeOnSelect: false,
    monthSelectorType: "static",
    yearSelectorType: "static",
    nextArrow : "",
    prevArrow : "",
    plugins: [
        ShortcutButtonsPlugin({
            button: [{
                labelClear: 'очистить',
            },
                {
                    labelAccept: 'применить',
                },],
            onClick: (index, fp) => {
                fp.clear();
                fp.close();
            }
        }),
    ],
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],
});
flatpickr("#datepicker-date", {
    "locale": Russian,
    dateFormat: "d.m.yy ",
    closeOnSelect: false,
    monthSelectorType: "static",
    yearSelectorType: "static",
    nextArrow : "",
    prevArrow : "",
    plugins: [
        ShortcutButtonsPlugin({
            button: [{
                label: 'очистить',
            },
                {
                    label: 'применить',
                },],
            onClick: (index, fp) => {
                fp.clear();
                fp.close();
            }
        }),
    ],
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],
});
$(document).ready(function(){
    /* guests-input */
    const clear = $('.quest-clean-js');
    clear.click(function (){

    });
    const accept = $('.quest-accept-js');
    const guestsDropdown = $('.guests-input-js');
    guestsDropdown.iqDropdown({
        maxItems: Infinity,
        minItems: 0,
        setSelectionText: (itemCount, totalItems) => {
            let text ='';
            let babyCounter ='';
            if (totalItems === 0) {
                clear.removeClass('guests-input__clean_active')
                return 'Сколько гостей';
            }
            if (totalItems === 1) text = '1 гость';
            if (totalItems > 1 && totalItems < 5) text = `${totalItems} гостя`;
            if (totalItems >= 5 )  text = `${totalItems} гостей`;
            if (itemCount.baby === 0) babyCounter ='';
            if (itemCount.baby === 1) babyCounter =', 1 младенец';
            if (itemCount.baby > 1) babyCounter =`, ${itemCount.baby} младенца`;
            text += babyCounter;
            clear.addClass('guests-input__clean_active')
            return text
        },
    });
    /* amenities-input */
    const amenitiesDropdown = $('.amenities-input-js')
    amenitiesDropdown.iqDropdown({
        maxItems: 10,
        minItems: 0,
        setSelectionText: (itemCount, totalItems) => {
            let text ='';
            let bedroom  ='';
            let bed  ='';
            let bathroom  ='';
            if (totalItems === 0) return '';
            if (itemCount.bedroom === 0) bedroom ='';
            if (itemCount.bedroom === 1) bedroom ='1 спальня';
            if (itemCount.bedroom > 1) bedroom =`${itemCount.bedroom} спальни`;
            if (itemCount.bed === 0) bed ='';
            if (itemCount.bed === 1) bed =', 1 кровать';
            if (itemCount.bed > 1) bed =`, ${itemCount.bed} кровати`;
            if (itemCount.bathroom === 0) bathroom ='';
            if (itemCount.bathroom > 0) bathroom = '...';
            text = bedroom + bed + bathroom;
            return text
        },
    });
    /* owlCarousel */
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
    /* range-slider*/
    const mySlider = $( "#slider-range" );
    mySlider.slider({
        range: true,
        'min': 0,
        'max': 15700,
        values: [ 5000, 10000 ],
        classes: {
            "ui-slider": "custom-slider",
            "ui-widget": "custom-slider",
            "ui-slider-handle": "custom-handle",
            "ui-state-default": "custom-handle",
            "ui-slider-range": "custom-range"
        },
        slide: function( event, ui ) {
            $( "#amount" ).text(new Intl.NumberFormat('ru-RU').format(ui.values[ 0 ]) + "₽ - "
                + new Intl.NumberFormat('ru-RU').format(ui.values[ 1 ]) + '₽');
        }
    });
    const valueMin = mySlider.slider( "values", 0 );
    const valueMax = mySlider.slider( "values", 1 );
    $( "#amount" ).text(new Intl.NumberFormat('ru-RU').format(valueMin) + '₽' +
        " - " + new Intl.NumberFormat('ru-RU').format(valueMax) + '₽' );
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
    /* guest input dropdown */
    // const guestBlock = $(".guests-block-js");
    // const guestDropdownButton = $(".guests-dropdown-button-js");
    // const guestInput = $(".input-guests-js");
    // const guestDropdown = $(".guests-dropdown-js");
    // const guestClearBtn = $(".quest-clean-js");
    // const allCounters = $(".guest-counter-js");
    // /* show-hide dropdown*/
    // guestDropdownButton.click(function (){
    //     guestDropdown.toggleClass("guests-input__dropdown-wrapper_active");
    //     guestInput.toggleClass("guests-input__input_active");
    // });
    // // $(document).mouseup(function (e){
    // //     if (!guestBlock.is(e.target)
    // //         && guestBlock.has(e.target).length === 0) {
    // //         guestDropdown.removeClass("guests-input__dropdown-wrapper_active");
    // //     }
    // // });
    // /* guest more button */
    // const moreBtn =$(".more-js");
    // moreBtn.click(function (){
    //     const lessBtn = $(this).siblings(".less-js");
    //     const counter = $(this).prev();
    //     if (counter.text() === "0") lessBtn.addClass("guests-input__button_active")
    //     counter.text(function (i, count){
    //         return ++count
    //     });
    //     changeInputValue();
    // });
    // /* guest less button */
    // const lessBtn =$(".less-js")
    // lessBtn.click(function (){
    //     const counter = $(this).next();
    //     if (+counter.text() > 0) {
    //         counter.text(function (i, count) {
    //             return --count
    //         })
    //     }
    //     if (counter.text() === "0") $(this).removeClass("guests-input__button_active");
    //     changeInputValue();
    // });
    // /* quest input validator */
    // function changeInputValue() {
    //     let count = 0
    //     allCounters.text(function (z, x){
    //         count = count + +x
    //     })
    //     if ( count === 1) {
    //         guestClearBtn.addClass("guests-input__clean_active");
    //         guestInput.val(function (){
    //             return  "1 гость";
    //         })
    //     } else
    //     if (count > 1 && count < 5) {
    //         guestInput.val(function (){
    //             return `${count} гостя`;
    //         })
    //     } else
    //     if (count >= 5 ) {
    //         guestInput.val(function (){
    //             return `${count} гостей`;
    //         })
    //     } else {
    //         guestClearBtn.removeClass("guests-input__clean_active")
    //         guestInput.val(function (){
    //             return 'Сколько гостей';
    //         })
    //     }
    // }
    // /* clear form */
    // guestClearBtn.click(function (){
    //     guestInput.val(function (){
    //         return "Сколько гостей";
    //     });
    //     lessBtn.removeClass("guests-input__button_active");
    //     guestClearBtn.removeClass("guests-input__clean_active");
    //     allCounters.text(function (){
    //         return "0"
    //     });
    // });

});