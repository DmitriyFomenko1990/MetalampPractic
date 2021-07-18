import $ from "jquery";

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
