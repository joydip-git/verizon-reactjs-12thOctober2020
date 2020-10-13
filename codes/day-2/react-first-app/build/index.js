"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appElement = (0, _app["default"])();
var appDivElement = document.getElementById('app');
appDivElement.appendChild(appElement);