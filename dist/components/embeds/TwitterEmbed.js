"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.TwitterEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_twitter_embed_1 = require("react-twitter-embed");
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const minPlaceholderWidth = 250;
const maxPlaceholderWidth = 550;
const defaultPlaceholderHeight = 350;
const TwitterEmbed = (_a) => {
    var _b, _c;
    var { url, twitterTweetEmbedProps, width, height, linkText = 'View post on Twitter', embedPlaceholder, placeholderDisabled, placeholderImageUrl } = _a, divProps = __rest(_a, ["url", "twitterTweetEmbedProps", "width", "height", "linkText", "embedPlaceholder", "placeholderDisabled", "placeholderImageUrl"]);
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');
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
        border: 'solid 1px #c9d4d9',
        borderRadius: 12,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(PlaceholderEmbed_1.PlaceholderEmbed, { url: url, style: placeholderStyle, imageUrl: placeholderImageUrl, linkText: linkText }));
    // === END Placeholder ===
    return (React.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-twitter-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined }, divProps.style) }),
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement(react_twitter_embed_1.TwitterTweetEmbed, Object.assign({ tweetId: tweetId, placeholder: placeholderDisabled ? undefined : placeholder }, twitterTweetEmbedProps))));
};
exports.TwitterEmbed = TwitterEmbed;