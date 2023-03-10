"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
var _closeIcon = _interopRequireDefault(require("../../assets/close-icon.svg"));
/**
 * Returns a modal component with props which are explained below:
 * the width of the modal is managed via the width attribute of the style prop or the large prop or the small prop
 * - large : boolean - true or false
 * - small : boolean - true or false
 * - style : object - written in React Inline Css Style according to the schema below
 * {
    width : '',
    backgroundColor: '',
    borderRadius: '',
    color: '',
    fontSize: ''
  }
 * - onClose : function - the closing behavior or the modal
 * - show : boolean - with regards to the local state of [show, setShow] if the modal is visible or not
 * - the modal content is defined bu the children prop directly in the <Modal> </Modal> component
 *
 */

function Modal(props) {
  var onClose = props.onClose;
  var closeOnEscapeKeyDown = (0, _react.useCallback)(function (e) {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }, [onClose]);
  (0, _react.useEffect)(function () {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat(props.show ? 'show' : ''),
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content \n                  ".concat(props.small ? 'small' : '', "\n                  ").concat(props.large ? 'large' : '', "\n                  "),
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      width: "".concat(props.style.width),
      backgroundColor: "".concat(props.style.backgroundColor),
      borderRadius: "".concat(props.style.borderRadius),
      color: "".concat(props.style.color),
      fontSize: "".concat(props.style.fontSize),
      textAlign: "".concat(props.style.textAlign),
      fontFamily: "".concat(props.style.fontFamily),
      height: "".concat(props.style.height),
      margin: "".concat(props.style.margin),
      display: "".concat(props.style.display),
      justifyContent: "".concat(props.style.justifyContent),
      alignItems: "".concat(props.style.alignItems)
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children), /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.onClose,
    className: "button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "button-icon",
    src: props.isIcon ? props.closeIcon : _closeIcon.default,
    alt: "close"
  }))));
}