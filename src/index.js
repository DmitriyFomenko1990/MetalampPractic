import noUiSlider from 'nouislider';
import wNumb from './js/wNumb'
import "./styles/index.scss";



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
