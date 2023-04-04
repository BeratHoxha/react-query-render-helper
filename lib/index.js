"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _loader = _interopRequireDefault(require("./components/loader"));
var _error = _interopRequireDefault(require("./components/error"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Components

// This helper inspects the results from one or more react-query useQuery calls.
// It decides what component should be rendered (Loader, Error, etc.) and
// returns it to the caller. This helps reduce tedious boilerplate code.
// More details for why this helper exists: https://hub3.com/blog/reducing-react-query-boilerplate
//
// opts:
// - loaderProps: props for components/loader
// - errorProps: props for components/error
// - loaderComponent: override loader component
// - errorComponent: override error component
// - shouldShowLoaderWhenIdle: show the loader component while the request is idle.
var reactQueryRenderHelper = function reactQueryRenderHelper(reactQueryAttrs) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isLoading = reactQueryAttrs.some(function (attr) {
    return attr.sLoading === true;
  });
  var isIdle = reactQueryAttrs.some(function (attr) {
    return attr.isIdle == true;
  });
  if (isLoading || opts.shouldShowLoaderWhenIdle && isIdle) {
    return opts.loaderComponent || /*#__PURE__*/React.createElement(_loader["default"], opts.loaderProps);
  }
  var isError = _.some(reactQueryAttrs, {
    isError: true
  });
  if (isError) {
    return opts.errorComponent || /*#__PURE__*/React.createElement(_error["default"], opts.errorProps);
  }
  return undefined;
};
var _default = reactQueryRenderHelper;
exports["default"] = _default;