import $ from "jquery";

const checkboxBtn = $(".expandable-checkbox-button-js");
const checkboxList = $(".expandable-checkbox-list-js");
checkboxBtn.click(function (){
    checkboxList.toggle(500)
    checkboxBtn.toggleClass("expandable-checkbox-list__list-opener_active")
})
