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

//
// $(document).ready(function(){
//     /* guest input dropdown */
//     const guestBlock = $(".guests-block-js");
//     const guestDropdownButton = $(".guests-dropdown-button-js");
//     const guestInput = $(".input-guests-js");
//     const guestDropdown = $(".guests-dropdown-js");
//     const guestClearBtn = $(".quest-clean-js");
//     const allCounters = $(".guest-counter-js");
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
//     /* guest more button */
//     const moreBtn =$(".more-js");
//     moreBtn.click(function (){
//         const lessBtn = $(this).siblings(".less-js");
//         const counter = $(this).prev();
//         if (counter.text() === "0") lessBtn.addClass("guests-input__button_active")
//         counter.text(function (i, count){
//             return ++count
//         });
//         changeInputValue();
//     });
//     /* guest less button */
//     const lessBtn =$(".less-js")
//     lessBtn.click(function (){
//         const counter = $(this).next();
//         if (+counter.text() > 0) {
//             counter.text(function (i, count) {
//                 return --count
//             })
//         }
//         if (counter.text() === "0") $(this).removeClass("guests-input__button_active");
//         changeInputValue();
//     });
//     /* quest input validator */
//     function changeInputValue() {
//         let count = 0
//         allCounters.text(function (z, x){
//             count = count + +x
//         })
//         if ( count === 1) {
//             guestClearBtn.addClass("guests-input__clean_active");
//             guestInput.val(function (){
//                 return  "1 гость";
//             })
//         } else
//         if (count > 1 && count < 5) {
//             guestInput.val(function (){
//                 return `${count} гостя`;
//             })
//         } else
//         if (count >= 5 ) {
//             guestInput.val(function (){
//                 return `${count} гостей`;
//             })
//         } else {
//             guestClearBtn.removeClass("guests-input__clean_active")
//             guestInput.val(function (){
//                 return 'Сколько гостей';
//             })
//         }
//     }
//     /* clear form */
//     guestClearBtn.click(function (){
//         guestInput.val(function (){
//             return "Сколько гостей";
//         });
//         lessBtn.removeClass("guests-input__button_active");
//         guestClearBtn.removeClass("guests-input__clean_active");
//         allCounters.text(function (){
//             return "0"
//         });
//     });
//
// });