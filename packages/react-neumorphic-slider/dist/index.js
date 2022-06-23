'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var styled = require('styled-components');
var hexRgb = require('hex-rgb');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var hexRgb__default = /*#__PURE__*/_interopDefaultLegacy(hexRgb);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var NuSliderStyled = styled__default["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 26px;\n  width: 100%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: 4px;\n  display: inline-block;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  transition: all 200ms ease-in-out;\n  background: inherit;\n  \n  &::after {\n  content: \"\";\n  overflow: hidden;\n  position: absolute;\n  border-radius: 32px;\n    padding: 4px;\n  background-color: inherit;\n    z-index: 1;\n    width: 100%;\n    height: 28px;\n    isolation: isolate;\n    box-shadow: ", "\n  }\n  &:focus {\n    &::-webkit-slider-thumb {\n            background-color: ", "\n    }\n  }\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    position: relative;\n    border-radius: 32px;\n    background-color: inherit;\n    z-index: 2;\n    width: 24px;\n    top: 5px;\n    left: 4px;\n    height: 24px;\n    transform: translate3d(0%, 0, 0);\n    box-shadow: ", ";\n    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n    &:hover {\n            background-color: ", "\n    }\n  }\n  &::-moz-range-thumb {\n    overflow: hidden;\n    position: relative;\n    border-radius: 32px;\n    background-color: inherit;\n    z-index: 2;\n    width: 24px;\n    top: 5px;\n    left: 4px;\n    height: 24px;\n    transform: translate3d(0%, 0, 0);\n    box-shadow: ", ";\n    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n    &:hover {\n            background-color: ", "\n    }\n  }\n  &.nu-switch--disabled:before {\n    background-color:", ";\n  }\n  &.nu-switch.nu-switch--disabled {\n    opacity: 0.75;\n  }\n"], ["\n  height: 26px;\n  width: 100%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: 4px;\n  display: inline-block;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  transition: all 200ms ease-in-out;\n  background: inherit;\n  \n  &::after {\n  content: \"\";\n  overflow: hidden;\n  position: absolute;\n  border-radius: 32px;\n    padding: 4px;\n  background-color: inherit;\n    z-index: 1;\n    width: 100%;\n    height: 28px;\n    isolation: isolate;\n    box-shadow: ", "\n  }\n  &:focus {\n    &::-webkit-slider-thumb {\n            background-color: ", "\n    }\n  }\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    position: relative;\n    border-radius: 32px;\n    background-color: inherit;\n    z-index: 2;\n    width: 24px;\n    top: 5px;\n    left: 4px;\n    height: 24px;\n    transform: translate3d(0%, 0, 0);\n    box-shadow: ", ";\n    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n    &:hover {\n            background-color: ", "\n    }\n  }\n  &::-moz-range-thumb {\n    overflow: hidden;\n    position: relative;\n    border-radius: 32px;\n    background-color: inherit;\n    z-index: 2;\n    width: 24px;\n    top: 5px;\n    left: 4px;\n    height: 24px;\n    transform: translate3d(0%, 0, 0);\n    box-shadow: ", ";\n    transition: all 0.2s cubic-bezier(0.85, 0.05, 0.18, 1.35);\n    &:hover {\n            background-color: ", "\n    }\n  }\n  &.nu-switch--disabled:before {\n    background-color:", ";\n  }\n  &.nu-switch.nu-switch--disabled {\n    opacity: 0.75;\n  }\n"])), function (props) { return "inset -2px -2px 3px ".concat(props.theme.bgLightShadow, ", inset 2px 2px 3px ").concat(props.theme.bgDarkShadow); }, function (props) { return props.theme.selectorBg; }, function (props) { return "1px 1px 2px ".concat(props.theme.bgDarkShadow, ", -1px -1px 2px ").concat(props.theme.bgLightShadow); }, function (props) { return props.theme.selectorBg; }, function (props) { return "1px 1px 2px ".concat(props.theme.bgDarkShadow, ", -1px -1px 2px ").concat(props.theme.bgLightShadow); }, function (props) { return props.theme.selectorBg; }, function (props) { return "".concat(props.theme.textDisabled, " !important"); });
var NuSliderLabelStyled = styled__default["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 16px;\n    margin-left: 28px;\n    margin-top: -2px;\n  color: ", ";\n"], ["\n    font-size: 16px;\n    margin-left: 28px;\n    margin-top: -2px;\n  color: ", ";\n"])), function (props) { return props.theme.text; });
var NuSliderContainer = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n        background-color: inherit;\n    margin: 4px 8px !important;\n    padding: 4px !important;\n    width: 200px;\n"], ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n        background-color: inherit;\n    margin: 4px 8px !important;\n    padding: 4px !important;\n    width: 200px;\n"])));
var NuSliderBody1 = styled__default["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  font-size: 16px;\n"], ["\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  font-size: 16px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var Color = require('color');
var uid = function () {
    return "_".concat((((1 + Math.random()) * 0x10000) | 0).toString(8).substring(1), "_");
};
var commonTheme = {
    white: '#ffffff',
    black: '#000000',
    primary: '#f71b94',
};
var lightTheme = {
    primary: '#fa7ac0',
    background: '#E4EBF5',
    bgDarkShadow: '#bec8e4',
    bgLightShadow: '#ffffff',
    text: 'rgba(0, 0, 0, 0.87)',
    textDisabled: 'rgba(0, 0, 0, 0.38)',
    textSecondary: 'rgba(0, 0, 0, 0.60)',
    bgDisabled: '#dee5e8',
    selectorBg: '#ffffff'
};
var darkTheme = {
    primary: '#aa0660',
    background: '#444444',
    bgDarkShadow: '#363636',
    bgLightShadow: '#525252',
    text: 'rgba(255, 255, 255, 0.87)',
    textDisabled: 'rgba(255, 255, 255, 0.38)',
    textSecondary: 'rgba(255, 255, 255, 0.60)',
    bgDisabled: '#727272',
    selectorBg: "#ffffff"
};
var SliderTheme;
(function (SliderTheme) {
    SliderTheme["DARK"] = "dark";
    SliderTheme["LIGHT"] = "light";
})(SliderTheme || (SliderTheme = {}));
var Slider = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, background = _a.background, mode = _a.mode, color = _a.color, _c = _a.value, value = _c === void 0 ? "0" : _c, _d = _a.range, range = _d === void 0 ? { min: "0", max: "100" } : _d, style = _a.style, label = _a.label, labelClassName = _a.labelClassName, className = _a.className, props = __rest(_a, ["disabled", "background", "mode", "color", "value", "range", "style", "label", "labelClassName", "className"]);
    var sliderRef = react.useRef();
    var defaultTheme = (!!mode && mode === SliderTheme.DARK ? darkTheme : lightTheme) || darkTheme;
    var overrideColor = color ? { selectorBg: color } : {};
    var overrideBackground = background ? { background: background } : {};
    var myTheme = __assign(__assign(__assign(__assign({}, commonTheme), defaultTheme), overrideColor), overrideBackground);
    var id = react.useMemo(function () { return props.id || uid(); }, []);
    var _e = react.useState(value), slideValue = _e[0], setSlideValue = _e[1];
    var _f = react.useState(myTheme), theme = _f[0], setTheme = _f[1];
    react.useEffect(function () {
        if (!!background) {
            generateTheme();
        }
    }, [background]);
    var generateTheme = function () {
        // no matter the luminosity
        var rgbBackground = Color(hexRgb__default["default"](background, { format: 'css' }));
        var lightShadow = rgbBackground.lighten(0.5);
        var darkShadow = rgbBackground.darken(0.5);
        var selectorBg = rgbBackground.lighten(0.15);
        var textColor = 'rgba(0, 0, 0, 0.87)';
        var textDisabled = 'rgba(0, 0, 0, 0.38)';
        var textSecondary = 'rgba(0, 0, 0, 0.60)';
        var bgDisabled = '#dee5e8';
        if (rgbBackground.luminosity() < 0.2) {
            // not too light, dark enough
            textColor = 'rgba(255, 255, 255, 0.87)';
            textDisabled = 'rgba(255, 255, 255, 0.38)';
            textSecondary = 'rgba(255, 255, 255, 0.60)';
            bgDisabled = '#727272';
            selectorBg = rgbBackground.lighten(0.15);
        }
        if (rgbBackground.luminosity() < 0.02) {
            //super dark
            var newMax = 5;
            var newMin = 2;
            var oldMax = 1;
            var oldMin = 0.98;
            var newRange = newMax - newMin;
            var oldRange = oldMax - oldMin;
            var newValue = ((((1 - rgbBackground.luminosity()) - oldMin) * newRange) / oldRange) + newMin;
            lightShadow = rgbBackground.lighten(newValue);
            darkShadow = rgbBackground.lighten(newValue / 2);
            selectorBg = rgbBackground.lighten(0.2);
        }
        if (rgbBackground.luminosity() > 0.2) {
            // light enough
            lightShadow = rgbBackground.lighten(0.25);
            darkShadow = rgbBackground.darken(0.5);
        }
        setTheme(__assign(__assign({}, theme), { bgDarkShadow: darkShadow.grayscale().hex(), bgLightShadow: lightShadow.grayscale().hex(), text: textColor, textDisabled: textDisabled, textSecondary: textSecondary, bgDisabled: bgDisabled, selectorBg: selectorBg }));
    };
    var handleChange = function (event) {
        var slideValue = event.target.value;
        setSlideValue(slideValue);
        props.onChange && props.onChange(event, id, slideValue);
    };
    return (jsxRuntime.jsx(styled.ThemeProvider, __assign({ theme: theme }, { children: jsxRuntime.jsxs(NuSliderContainer, __assign({ style: style, ref: sliderRef, className: "".concat(className) }, { children: [jsxRuntime.jsx(NuSliderStyled, { id: id, min: range.min, max: range.max, disabled: disabled, value: slideValue, onChange: function (e) { return handleChange(e); }, type: "range" }), jsxRuntime.jsx(NuSliderLabelStyled, __assign({ htmlFor: id, className: "".concat(labelClassName) }, { children: jsxRuntime.jsx(NuSliderBody1, __assign({ disabled: disabled }, { children: label })) }))] })) })));
};

exports.Slider = Slider;
