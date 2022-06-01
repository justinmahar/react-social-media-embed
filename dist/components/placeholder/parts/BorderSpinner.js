"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderSpinner = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const BorderSpinner = (_a) => {
    var divProps = __rest(_a, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, `
        .rsme-spinner {
          border: 3px solid rgba(0,0,0,0.75);
          border-right-color: transparent;
          border-radius: 50%;
          animation: rsme-spin 1s linear infinite;
        }
        @keyframes rsme-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `),
        react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-spinner', divProps.className), style: Object.assign({ width: 10, height: 10 }, divProps.style) }))));
};
exports.BorderSpinner = BorderSpinner;
