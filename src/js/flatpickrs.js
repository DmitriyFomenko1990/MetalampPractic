import flatpickr from "flatpickr";
import {Russian} from "flatpickr/dist/l10n/ru";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import ShortcutButtonsPlugin from "shortcut-buttons-flatpickr";

flatpickr("#double-datepicker", {
    "locale": Russian,
    mode: "range",
    minDate: "today",
    dateFormat: "d.m.yy",
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
                if (index === 0) {
                    fp.clear();
                    fp.close();
                } else {
                    fp.close();
                }
            }
        }),
    ],
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],
});
let flatpickrInterval = flatpickr("#datepicker-interval", {
                    "locale": Russian,
                    mode: "range",
                    minDate: "today",
                    dateFormat: "d M",
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
                                if (index === 0) {
                                    fp.clear();
                                    fp.close();
                                } else {
                                    fp.close();
                                }
                            }
                        }),
                    ],
                    disable: [
                        function(date) {
                            return !(date.getDate() );
                        }
                    ],
                });
if (flatpickrInterval.l10n) {
    flatpickrInterval.l10n.months.shorthand = ['янв', 'фев', 'март', 'апр', 'май', 'июнь',
        'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];
};

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
                if (index === 0) {
                    fp.clear();
                    fp.close();
                } else {
                    fp.close();
                }
            }
        }),
    ],
    disable: [
        function(date) {
            return !(date.getDate() );
        }
    ],
});