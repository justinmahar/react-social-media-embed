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
exports.YouTubePlaceholder = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const FooterLinkText_1 = require("./parts/FooterLinkText");
const FooterPlaceholder_1 = require("./parts/FooterPlaceholder");
const HeaderLinkText_1 = require("./parts/HeaderLinkText");
const PlaceholderHeader_1 = require("./parts/PlaceholderHeader");
const PlaceholderImageBody_1 = require("./parts/PlaceholderImageBody");
const PlaceholderTextBody_1 = require("./parts/PlaceholderTextBody");
const ProfilePlaceholder_1 = require("./parts/ProfilePlaceholder");
const Spinner_1 = require("./parts/Spinner");
const YouTubePlaceholder = (_a) => {
    var { url, linkText = 'View on YouTube', imageUrl } = _a, divProps = __rest(_a, ["url", "linkText", "imageUrl"]);
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ overflow: 'hidden', border: '1px solid #dee2e6', borderRadius: 0, boxSizing: 'border-box' }, divProps.style) }),
        react_1.default.createElement("a", { href: url, style: { textDecoration: 'none' }, target: "_blank", rel: "noopener noreferrer" },
            !imageUrl && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(PlaceholderHeader_1.PlaceholderHeader, { style: { paddingTop: 16, paddingBottom: 16 } },
                    react_1.default.createElement(ProfilePlaceholder_1.ProfilePlaceholder, null)))),
            !imageUrl && (react_1.default.createElement(PlaceholderTextBody_1.PlaceholderTextBody, { style: {
                    height: 220,
                    paddingBottom: 40,
                } },
                react_1.default.createElement(Spinner_1.Spinner, { size: 30 }),
                !!linkText && react_1.default.createElement(HeaderLinkText_1.HeaderLinkText, null, linkText))),
            imageUrl && react_1.default.createElement(PlaceholderImageBody_1.PlaceholderImageBody, { imageUrl: imageUrl }),
            imageUrl && (react_1.default.createElement(FooterPlaceholder_1.PlaceholderFooter, { style: { paddingBottom: 10 } },
                react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: 16 } },
                    react_1.default.createElement(FooterLinkText_1.FooterLinkText, null, linkText),
                    react_1.default.createElement(Spinner_1.Spinner, null)))))));
};
exports.YouTubePlaceholder = YouTubePlaceholder;