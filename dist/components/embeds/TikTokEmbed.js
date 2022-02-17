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
exports.TikTokEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
// DOCS: https://developers.tiktok.com/doc/embed-videos
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 3000;
const defaultRetryBackoffMaxDelay = 30000;
const TikTokEmbed = (_a) => {
    var _b, _c;
    var { url, width, height, linkText = 'View post on TikTok', embedPlaceholder, placeholderDisabled, processDelay = defaultProcessDelay, scriptLoadDisabled = false, retryDisabled = false, retryInitialDelay = defaultRetryInitialDelay, retryBackoffMaxDelay = defaultRetryBackoffMaxDelay, placeholderImageUrl } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "embedPlaceholder", "placeholderDisabled", "processDelay", "scriptLoadDisabled", "retryDisabled", "retryInitialDelay", "retryBackoffMaxDelay", "placeholderImageUrl"]);
    // Format: https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1
    const embedId = url.replace(/[?].*$/, '').replace(/^.+\//, '');
    // console.log(embedId);
    const urlStripped = url.replace(/[?].*/, '');
    const [initialized, setInitialized] = react_1.default.useState(false);
    const [processTime, setProcessTime] = react_1.default.useState(-1);
    const [retryDelay, setRetryDelay] = react_1.default.useState(retryInitialDelay);
    const [retrying, setRetrying] = react_1.default.useState(false);
    const [retryTime, setRetryTime] = react_1.default.useState(-1);
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    // Initialization
    react_1.default.useEffect(() => {
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
    react_1.default.useEffect(() => {
        let timeout = undefined;
        if (initialized && !retryDisabled && typeof document !== 'undefined') {
            timeout = setTimeout(() => {
                const preEmbedElement = document.getElementById(uuidRef.current);
                if (!!preEmbedElement) {
                    console.warn('Pre-embed element found. Retrying...');
                    setProcessTime(Date.now());
                    setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
                    setRetryTime(Date.now());
                    setRetrying(true);
                }
            }, Math.max(0, retryDelay));
        }
        return () => clearTimeout(timeout);
    }, [initialized, retryBackoffMaxDelay, retryDelay, retryDisabled, retryTime]);
    const urlWithNoQuery = url.replace(/[?].*$/, '');
    const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;
    react_1.default.useEffect(() => {
        if (typeof document !== 'undefined' && !scriptLoadDisabled) {
            const scriptId = `tiktok-embed-script`;
            const prevScript = document.getElementById(scriptId);
            if (prevScript) {
                prevScript.remove();
            }
            const scriptElement = document.createElement('script');
            scriptElement.setAttribute('src', `https://www.tiktok.com/embed.js?t=${Date.now()}`);
            scriptElement.setAttribute('id', scriptId);
            document.head.appendChild(scriptElement);
        }
    }, [scriptLoadDisabled]);
    // === Placeholder ===
    const placeholderStyle = {
        minWidth: 325,
        maxWidth: 480,
        width: typeof width !== 'undefined' ? width : '100%',
        height: typeof height !== 'undefined'
            ? height
            : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== 'undefined' || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== 'undefined'
                ? '100%'
                : 550,
        border: 'solid 1px rgba(22,24,35,0.12)',
        borderRadius: 8,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, { url: url, style: placeholderStyle, imageUrl: placeholderImageUrl, linkText: linkText }));
    // === END Placeholder ===
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-tiktok-embed', divProps.className), style: Object.assign({ overflow: 'hidden' }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('tiktok-embed-container', divProps.className), key: `${uuidRef}-${retryTime}` },
            react_1.default.createElement("blockquote", { className: "tiktok-embed", cite: url, "data-video-id": embedId }, !placeholderDisabled ? (react_1.default.createElement("div", { id: uuidRef.current, style: { display: 'flex', justifyContent: 'center' } }, placeholder)) : (react_1.default.createElement("div", { id: uuidRef.current, style: { display: 'none' } }, "\u00A0"))))));
};
exports.TikTokEmbed = TikTokEmbed;
