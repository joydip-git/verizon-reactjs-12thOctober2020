"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _welcome = _interopRequireDefault(require("./welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//root component file where other components will be nested
//component: app function
//element: 'appElement'
var app = function app() {
  //this will create an HTML element: div
  var appElement = document.createElement('div');
  appElement.id = 'appDiv';
  appElement.style.backgroundColor = 'lime'; //appending a another component (welcome) in div element

  var welcomeElement = (0, _welcome["default"])();
  appElement.appendChild(welcomeElement); //returning this div element

  return appElement;
};

var _default = app; // module.exports["default"] = app;

exports["default"] = _default;