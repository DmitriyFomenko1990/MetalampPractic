import "./styles/index.scss";
import "./js/jquery/jquery-ui";
import 'owl.carousel';
import "./js/jquery/item-quantity-dropdown.min";
import "./js/expandable-checkbox-list"
import "./js/burger-menu"
import "./js/flatpickrs"
import "./js/owlCarousel"
import "./js/like-button"
import "./js/range-slider"
import "./js/guests-input"
import "./js/amenities-input"
import "./js/canvas"


// $(document).ready(function(){
//     /* guest input dropdown */
//     const guestBlock = $(".guests-block-js");
//     const guestDropdownButton = $(".guests-dropdown-button-js");
//     const guestInput = $(".input-guests-js");
//     const guestDropdown = $(".guests-dropdown-js");
//     const guestClearBtn = $(".quest-clean-js");
//     const allCounters = $(".guest-counter-js");
//
//     /* show-hide dropdown*/
//     guestDropdownButton.click(function (){
//         guestDropdown.toggleClass("guests-input__dropdown-wrapper_active");
//         guestInput.toggleClass("guests-input__input_active");
//     });
//     $(document).mouseup(function (e){
//         if (!guestBlock.is(e.target)
//             && guestBlock.has(e.target).length === 0) {
//             guestDropdown.removeClass("guests-input__dropdown-wrapper_active");
//         }
//     });
//
//     /* guest more button */
//     // TIP: названия якорных классов должны начинаться с `.js-...`
//     const moreBtn =$(".more-js");
//     moreBtn.click(function (){
//         const lessBtn = $(this).siblings(".less-js");
//         const counter = $(this).siblings('.js-counter');
//         const counterValue = Number(counter.text());
//
//         if (counterValue > 0) {
//             lessBtn.addClass("guests-input__button_active");
//         }
//         counter.text(counterValue + 1);
//
//         changeInputValue();
//     });
//
//     /* guest less button */
//     const lessBtn =$(".less-js")
//     lessBtn.click(function (){
//         const counter = $(this).next();
//         if (+counter.text() > 0) {
//             counter.text(function (i, count) {
//                 return --count
//             })
//         }
//         // TIP: сравнение со сторокой в которой цифра - плохо, нужно приведение типов к числу
//         // TIP: коротки if-ы - моветон, всегда скобки и перенос строки
//         if (counter.text() === "0") $(this).removeClass("guests-input__button_active");
//         changeInputValue();
//     });
//     /* quest input validator */
//     function changeInputValue() {
//         let count = 0
//         allCounters.text(function (z, x){
//             count = count + +x
//         })
//
//         // TIP: pluralize - давно избитая вещь, найди готовую реализацию и подтяни сюда
//         if ( count === 1) {
//             guestClearBtn.addClass("guests-input__clean_active");
//             guestInput.val(function (){
//                 return  "1 гость";
//             })
//         } else if (count > 1 && count < 5) {
//             guestInput.val(function (){
//                 return `${count} гостя`;
//             })
//         } else if (count >= 5 ) {
//             guestInput.val(function (){
//                 return `${count} гостей`;
//             })
//         } else {
//             guestClearBtn.removeClass("guests-input__clean_active")
//
//             // TIP: запись статичного значения, то есть функция здесь не нужна
//             //      лучше сразу передать строку
//             guestInput.val(function (){
//                 return 'Сколько гостей';
//             })
//         }
//     }
//     /* clear form */
//     guestClearBtn.click(function (){
//         guestInput.val('Сколько гостей');
//         allCounters.text('0');
//
//         lessBtn.removeClass("guests-input__button_active");
//         guestClearBtn.removeClass("guests-input__clean_active");
//     });
//
// });