import $ from "jquery";

const JCanvas = require( 'jcanvas' );
JCanvas( $, window );

$('.canvas').drawArc({
    fillStyle: 'steelblue',
    strokeStyle: 'blue',
    strokeWidth: 4,
    x: 150, y: 100,
    fromCenter: false,
    width: 200,
    height: 100
});