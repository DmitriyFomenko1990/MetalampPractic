import $ from "jquery";

const clear = $('.quest-clean-js');
clear.click(function (){
  // TODO: not implemented
});

const accept = $('.quest-accept-js');


const guestsDropdown = $('.guests-input-js');
const dropdownInstance = guestsDropdown.iqDropdown({
    maxItems: Infinity,
    minItems: 0,
    setSelectionText: (itemCount, totalItems) => {
        let text ='';
        let babyCounter ='';
        if (totalItems === 0) {
            clear.show(('command-wrapper__clean_active'))
            return 'Сколько гостей';
        }
        if (totalItems === 1) text = '1 гость';
        if (totalItems > 1 && totalItems < 5) text = `${totalItems} гостя`;
        if (totalItems >= 5 )  text = `${totalItems} гостей`;
        if (itemCount.baby === 0) babyCounter ='';
        if (itemCount.baby === 1) babyCounter =', 1 младенец';
        if (itemCount.baby > 1) babyCounter =`, ${itemCount.baby} младенца`;
        text += babyCounter;
        clear.addClass('command-wrapper__clean_active')
        return text
    },
});



console.log(dropdownInstance);
