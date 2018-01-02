"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n"], ["\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: black;\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ", ";\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n"], ["\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: black;\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ", ";\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: black;\n\nborder-color: black;\ncolor: white;\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n"], ["\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: black;\n\nborder-color: black;\ncolor: white;\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject);

var Input = _styledComponents.default.input(_templateObject2, function (props) {
  return props.uppercase ? 'uppercase' : 'none';
});

var Button = _styledComponents.default.button(_templateObject3);

var InputSubmit =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InputSubmit, _React$PureComponent);

  function InputSubmit() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, InputSubmit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = InputSubmit.__proto__ || Object.getPrototypeOf(InputSubmit)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: ''
      }
    }), Object.defineProperty(_this, "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.onSubmit(_this.state.value);

        if (_this.props.clearOnSubmit) {
          _this.setState({
            value: ''
          });
        }
      }
    }), Object.defineProperty(_this, "handleInputKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var keyCode = _ref2.keyCode;

        if (keyCode === 13) {
          _this.handleSubmit();
        }
      }
    }), Object.defineProperty(_this, "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var value = e.target.value;

        _this.setState({
          value: value
        });
      }
    }), _temp));
  }

  _createClass(InputSubmit, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Container, {
        className: this.props.className
      }, _react.default.createElement(Input, {
        placeholder: this.props.placeholder,
        uppercase: this.props.uppercase,
        value: this.state.value,
        onKeyDown: this.handleInputKeyDown,
        onChange: this.handleInputChange
      }), _react.default.createElement(Button, {
        onClick: this.handleSubmit
      }, this.props.buttonText));
    }
  }]);

  return InputSubmit;
}(_react.default.PureComponent);

exports.default = InputSubmit;
Object.defineProperty(InputSubmit, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onSubmit: _propTypes.default.func.isRequired,
    clearOnSubmit: _propTypes.default.bool,
    uppercase: _propTypes.default.bool,
    buttonText: _propTypes.default.string
  }
});
Object.defineProperty(InputSubmit, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearOnSubmit: false,
    uppercase: false,
    buttonText: 'SUBMIT'
  }
});