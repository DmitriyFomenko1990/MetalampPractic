import $ from "jquery";

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
$('.quest-clean-js').click(function() {
    const options = $('.quest-count')
    console.log(options)
    options.map((index, el) =>{
        console.log(el)
        console.log(el.find('.counter'))
    })

});
