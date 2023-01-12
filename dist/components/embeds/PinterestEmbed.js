"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PinterestEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const EmbedStyle_1 = require("./EmbedStyle");
const minPlaceholderWidth = 250;
const maxPlaceholderWidth = 550;
const defaultPlaceholderHeight = 550;
const borderRadius = 8;
const PinterestEmbed = (_a) => {
    var _b, _c, _d;
    var { url, postUrl, width, height = 500, linkText = 'View post on Pinterest', placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false } = _a, divProps = __rest(_a, ["url", "postUrl", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled"]);
    const [ready, setReady] = React.useState(false);
    // === Placeholder ===
    const placeholderStyle = {
        minWidth: minPlaceholderWidth,
        maxWidth: maxPlaceholderWidth,
        width: typeof width !== 'undefined' ? width : '100%',
        height: typeof height !== 'undefined'
            ? height
            : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== 'undefined' || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== 'undefined'
                ? '100%'
                : defaultPlaceholderHeight,
        border: 'solid 1px rgba(0, 0, 0, 0.15)',
        borderRadius,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: postUrl !== null && postUrl !== void 0 ? postUrl : url, imageUrl: placeholderImageUrl, linkText: linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) })));
    // Example URL: https://www.pinterest.com/pin/875105771321194304/sent/?invite_code=e86262c989ee4f559a08a4494c300ba3&sfo=1
    const postIdMatch = (_d = url.match(/pin\/([\w\d_-]+)/)) === null || _d === void 0 ? void 0 : _d[1];
    const postId = postIdMatch !== null && postIdMatch !== void 0 ? postIdMatch : '000000000000000000';
    return (React.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-pinterest-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined, borderRadius }, divProps.style) }),
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("iframe", { className: (0, classnames_1.default)('pinterest-post', !ready && 'rsme-d-none'), src: `https://assets.pinterest.com/ext/embed.html?id=${postId}`, width: "100%", height: !ready ? 0 : height, frameBorder: "0", scrolling: "no", onLoad: () => setReady(true) }),
        !ready && !placeholderDisabled && placeholder));
};
exports.PinterestEmbed = PinterestEmbed;
