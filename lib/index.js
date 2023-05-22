"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.am = exports.Greeter = void 0;
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
var am = function (name) { return "".concat(JSON.stringify(name)); };
exports.am = am;
