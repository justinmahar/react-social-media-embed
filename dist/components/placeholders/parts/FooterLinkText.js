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
exports.FooterLinkText = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const FooterLinkText = (_a) => {
    var divProps = __rest(_a, []);
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ color: '#0095f6', fontWeight: 600, padding: 16, fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal' }, divProps.style) }), divProps.children));
};
exports.FooterLinkText = FooterLinkText;
