"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var welcome = function welcome() {
  var welcomeElement = document.createElement('span');
  welcomeElement.innerText = 'Hello React';
  return welcomeElement;
};

var _default = welcome;
exports["default"] = _default;