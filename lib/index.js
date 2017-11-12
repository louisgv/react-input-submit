'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n'], ['\ndisplay: flex;\nwidth: 100%;\nheight: 45px;\njustify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: black;\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ', ';\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n'], ['\nborder-top-left-radius: 30px;\nborder-bottom-left-radius: 30px;\n\nborder-color: black;\n\nfont-size: 14.4px;\n\npadding-left: 1em;\nmargin-right: 1em;\n\nline-height: 1em;\n\ntext-decoration: none;\n\ntext-transform: ', ';\n\nwidth: 72%;\n\n:active, :focus {\n\toutline:none;\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: black;\n\nborder-color: black;\ncolor: white;\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n'], ['\nborder-top-right-radius: 30px;\nborder-bottom-right-radius: 30px;\n\nbackground-color: black;\n\nborder-color: black;\ncolor: white;\nwidth: 18%;\n\nfont-size: 14.4px;\n\ntransition: 0.5s;\n\n:hover {\n\topacity: 0.6;\n}\n\n:active, :focus {\n\toutline:none;\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (props) {
	return props.uppercase ? 'uppercase' : 'none';
});

var Button = _styledComponents2.default.button(_templateObject3);

var InputSubmit = function (_React$PureComponent) {
	_inherits(InputSubmit, _React$PureComponent);

	function InputSubmit() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputSubmit);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputSubmit.__proto__ || Object.getPrototypeOf(InputSubmit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: ''
		}, _this.handleSubmit = function () {
			_this.props.onSubmit(_this.state.value);
			if (_this.props.clearOnSubmit) {
				_this.setState({ value: '' });
			}
		}, _this.handleInputKeyDown = function (_ref2) {
			var keyCode = _ref2.keyCode;

			if (keyCode === 13) {
				_this.handleSubmit();
			}
		}, _this.handleInputChange = function (e) {
			var value = e.target.value;

			_this.setState({ value: value });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputSubmit, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Container,
				null,
				_react2.default.createElement(Input, { placeholder: this.props.placeholder,
					uppercase: this.props.uppercase,
					value: this.state.value,
					onKeyDown: this.handleInputKeyDown,
					onChange: this.handleInputChange
				}),
				_react2.default.createElement(
					Button,
					{ onClick: this.handleSubmit },
					'SUBMIT'
				)
			);
		}
	}]);

	return InputSubmit;
}(_react2.default.PureComponent);

InputSubmit.propTypes = {
	onSubmit: _propTypes2.default.func.isRequired,
	clearOnSubmit: _propTypes2.default.bool,
	uppercase: _propTypes2.default.bool
};
InputSubmit.defaultProps = {
	clearOnSubmit: false,
	uppercase: false
};
exports.default = InputSubmit;