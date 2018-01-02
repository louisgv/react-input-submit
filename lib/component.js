"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.Container = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: ", ";\nborder-color: ", ";\n\ncolor: ", ";\n\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n"], ["\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: ", ";\nborder-color: ", ";\n\ncolor: ", ";\n\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: ", ";\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ", ";\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n"], ["\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: ", ";\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ", ";\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject, (0, _styledTheme.palette)(0), (0, _styledTheme.palette)(0), (0, _styledTheme.palette)('grayscale', 0, true));

exports.Button = Button;

var Container = _styledComponents.default.div(_templateObject2);

exports.Container = Container;

var Input = _styledComponents.default.input(_templateObject3, (0, _styledTheme.palette)(0), function (props) {
  return props.uppercase ? 'uppercase' : 'none';
});

exports.Input = Input;