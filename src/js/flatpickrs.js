import flatpickr from "flatpickr";
import {Russian} from "flatpickr/dist/l10n/ru";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import ShortcutButtonsPlugin from "shortcut-buttons-flatpickr";

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