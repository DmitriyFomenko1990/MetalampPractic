import "./styles/index.scss";
import $ from "jquery";
import "./js/jquery/jquery-ui"
import 'owl.carousel';
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"


flatpickr("#datepicker1", {
    "locale": Russian,
    mode: "range",
    minDate: "today",
    dateFormat: "d M",
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],

})
$(document).ready(function(){
    const a = $(".owl-carousel")
    console.log(a)
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

    /* datepicker*/
    // $("#datepicker1").flatpickr({
    //
    // });

    // $( function() {
    //     $( "#datepicker" ).datepicker({
    //         range: 'period', // режим - выбор периода
    //         numberOfMonths: 2,
    //         onSelect: function(dateText, inst, extensionRange) {
    //             // extensionRange - объект расширения
    //             $('[name=startDate]').val(extensionRange.startDateText);
    //             $('[name=endDate]').val(extensionRange.endDateText);
    //         },
    //         dateFormat: "dd.mm.yy",
    //         minDate: 0,
    //
    //     });
    // } );
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

    // $(function() {
    //     $('#datepicker').datepicker({
    //         range: 'period', // режим - выбор периода
    //         numberOfMonths: 2,
    //         onSelect: function(dateText, inst, extensionRange) {
    //             // extensionRange - объект расширения
    //             $('[name=startDate]').val(extensionRange.startDateText);
    //             $('[name=endDate]').val(extensionRange.endDateText);
    //         }
    //     });
    //
    //     $('#datepicker').datepicker('setDate', ['+4d', '+8d']);
    //
    //     // объект расширения (хранит состояние календаря)
    //     const extensionRange = $('#datepicker').datepicker('widget').data('datepickerExtensionRange');
    //     if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    //     if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
    // });
});