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
exports.InstagramEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
let embedScriptLoaded = false;
const minPlaceholderWidth = 326;
const maxPlaceholderWidth = 540;
const defaultPlaceholderHeight = 372;
const InstagramEmbed = (_a) => {
    var _b, _c;
    var { url, igVersion = '14', width, height, linkText = 'View post on Instagram', processDelay = 100, scriptLoadDisabled = false, retryDisabled = false, retryInitialDelay = 1000, retryBackoffMaxDelay = 5000, embedPlaceholder, placeholderDisabled, placeholderImageUrl } = _a, divProps = __rest(_a, ["url", "igVersion", "width", "height", "linkText", "processDelay", "scriptLoadDisabled", "retryDisabled", "retryInitialDelay", "retryBackoffMaxDelay", "embedPlaceholder", "placeholderDisabled", "placeholderImageUrl"]);
    const [initialized, setInitialized] = React.useState(false);
    const [processTime, setProcessTime] = React.useState(-1);
    const [retryDelay, setRetryDelay] = React.useState(retryInitialDelay);
    const [retrying, setRetrying] = React.useState(false);
    const [retryTime, setRetryTime] = React.useState(-1);
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    React.useEffect(() => {
        const win = typeof window !== 'undefined' ? window : undefined;
        if (win && processTime >= 0) {
            // This call will use the IG embed script to process all elements with the `instagram-media` class name.
            if (typeof win.instgrm !== 'undefined' && win.instgrm.Embeds) {
                win.instgrm.Embeds.process();
            }
            else {
                console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
            }
        }
    }, [processTime, url]);
    // Initialization
    React.useEffect(() => {
        const timeout = undefined;
        if (!initialized) {
            if (typeof processDelay !== 'undefined' && processDelay > 0) {
                setTimeout(() => {
                    setProcessTime(Date.now());
                    setInitialized(true);
                }, Math.max(0, processDelay));
            }
            else if (processDelay === 0) {
                setProcessTime(Date.now());
                setInitialized(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [initialized, processDelay]);
    // Exponential backoff retry
    React.useEffect(() => {
        let timeout = undefined;
        if (initialized && !retryDisabled && typeof document !== 'undefined') {
            timeout = setTimeout(() => {
                const preEmbedElement = document.getElementById(uuidRef.current);
                if (!!preEmbedElement) {
                    setProcessTime(Date.now());
                    setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
                    setRetryTime(Date.now());
                    setRetrying(true);
                }
            }, Math.max(0, retryDelay));
        }
        return () => clearTimeout(timeout);
    }, [initialized, retryBackoffMaxDelay, retryDelay, retryDisabled, retryTime]);
    React.useEffect(() => {
        var _a;
        if (typeof document !== 'undefined' && !scriptLoadDisabled && !embedScriptLoaded) {
            const win = typeof window !== 'undefined' ? window : undefined;
            if (!((_a = win.instgrm) === null || _a === void 0 ? void 0 : _a.Embeds)) {
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', '//www.instagram.com/embed.js');
                document.head.appendChild(scriptElement);
            }
            embedScriptLoaded = true;
        }
    }, [scriptLoadDisabled]);
    const urlWithNoQuery = url.replace(/[?].*$/, '');
    const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;
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
        border: '1px solid #dee2e6',
        borderRadius: 3,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(PlaceholderEmbed_1.PlaceholderEmbed, { url: cleanUrlWithEndingSlash, id: uuidRef.current, linkText: linkText, imageUrl: placeholderImageUrl, style: placeholderStyle }));
    // === END Placeholder ===
    return (React.createElement("div", { className: (0, classnames_1.default)('rsme-embed rsme-instagram-embed', divProps.className), style: Object.assign({ overflow: 'hidden' }, divProps.style), key: `${uuidRef}-${retryTime}` },
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("blockquote", { className: "instagram-media", "data-instgrm-permalink": `${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`, "data-instgrm-version": igVersion, style: {
                width: width !== null && width !== void 0 ? width : 'calc(100% - 2px)',
                height: height !== null && height !== void 0 ? height : undefined,
            } },
            !placeholderDisabled && placeholder,
            React.createElement("div", { className: "instagram-media-pre-embed rsme-d-none" }, "\u00A0"))));
};
exports.InstagramEmbed = InstagramEmbed;
