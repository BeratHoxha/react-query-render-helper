"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Vendor

var Error = function Error(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.errorTitle), /*#__PURE__*/React.createElement("p", null, props.errorMessage));
};
Error.propTypes = {
  errorTitle: _propTypes["default"].string,
  errorMessage: _propTypes["default"].string
};
Error.defaultProps = {
  errorTitle: "We're sorry, something went wrong.",
  errorMessage: 'Our team is looking into it.'
};
var _default = /*#__PURE__*/(0, _react.memo)(Error);
exports["default"] = _default;