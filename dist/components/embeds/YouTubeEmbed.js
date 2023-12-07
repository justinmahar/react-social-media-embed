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
exports.YouTubeEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_youtube_1 = __importDefault(require("react-youtube"));
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const EmbedStyle_1 = require("./EmbedStyle");
const maxPlaceholderWidth = 640;
const defaultPlaceholderHeight = 360;
const borderRadius = 0;
const YouTubeEmbed = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var { url, width, height, linkText = 'Watch on YouTube', placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled, youTubeProps } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "youTubeProps"]);
    const [ready, setReady] = React.useState(false);
    const videoIdMatch = (_b = url.match(/[?&]v=(.+?)(?:$|[&?])/)) === null || _b === void 0 ? void 0 : _b[1];
    const shortsIdMatch = (_c = url.match(/https:\/\/(?:www\.)?youtube\.com\/shorts\/(.+?)(?:$|[&?])/)) === null || _c === void 0 ? void 0 : _c[1];
    const shortLinkMatch = (_d = url.match(/https:\/\/youtu\.be\/(.+?)(?:$|[&?])/)) === null || _d === void 0 ? void 0 : _d[1];
    const embedLinkMatch = (_e = url.match(/https:\/\/(?:www\.)youtube(-nocookie)?\.com\/embed\/(.+?)(?:$|[&?])/)) === null || _e === void 0 ? void 0 : _e[2];
    const videoId = (_h = (_g = (_f = videoIdMatch !== null && videoIdMatch !== void 0 ? videoIdMatch : shortsIdMatch) !== null && _f !== void 0 ? _f : shortLinkMatch) !== null && _g !== void 0 ? _g : embedLinkMatch) !== null && _h !== void 0 ? _h : '00000000';
    const start = +((_k = (_j = url.match(/(.+?)(?:$|[&?])start=(\d+)/)) === null || _j === void 0 ? void 0 : _j[2]) !== null && _k !== void 0 ? _k : 0);
    const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes('%'));
    const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes('%'));
    let opts = {};
    if (!!start) {
        opts.playerVars = { start };
    }
    if (typeof width !== 'undefined') {
        opts.width = isPercentageWidth ? '100%' : `${width}`;
    }
    if (typeof height !== 'undefined') {
        opts.height = isPercentageHeight ? '100%' : `${height}`;
    }
    opts = Object.assign(Object.assign({}, opts), youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.opts);
    // === Placeholder ===
    const placeholderStyle = {
        maxWidth: isPercentageWidth ? undefined : maxPlaceholderWidth,
        width: typeof width !== 'undefined' ? (isPercentageWidth ? '100%' : width) : '100%',
        height: isPercentageHeight
            ? '100%'
            : typeof height !== 'undefined'
                ? height
                : typeof ((_l = divProps.style) === null || _l === void 0 ? void 0 : _l.height) !== 'undefined' || typeof ((_m = divProps.style) === null || _m === void 0 ? void 0 : _m.maxHeight) !== 'undefined'
                    ? '100%'
                    : defaultPlaceholderHeight,
        border: '1px solid #dee2e6',
        borderRadius,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: url, imageUrl: placeholderImageUrl, linkText: linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) })));
    // === END Placeholder ===
    return (React.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-youtube-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined, borderRadius }, divProps.style) }),
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("div", { className: (0, classnames_1.default)(!ready && 'rsme-d-none') },
            React.createElement(react_youtube_1.default, Object.assign({}, youTubeProps, { className: (_o = youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.className) !== null && _o !== void 0 ? _o : 'youtube-iframe', videoId: (_p = youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.videoId) !== null && _p !== void 0 ? _p : videoId, opts: opts, onReady: (e) => {
                    setReady(true);
                    if (youTubeProps && youTubeProps.onReady) {
                        youTubeProps === null || youTubeProps === void 0 ? void 0 : youTubeProps.onReady(e);
                    }
                } }))),
        !ready && !placeholderDisabled && placeholder));
};
exports.YouTubeEmbed = YouTubeEmbed;
