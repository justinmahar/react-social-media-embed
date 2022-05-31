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
const embedJsScriptSrc = 'https://www.tiktok.com/embed.js';
const minPlaceholderWidth = 325;
const maxPlaceholderWidth = 480;
const defaultPlaceholderHeight = 550;
const borderRadius = 8;
// Embed Stages
const PROCESS_EMBED_STAGE = 'process-embed';
const CONFIRM_EMBED_SUCCESS_STAGE = 'confirm-embed-success';
const RETRYING_STAGE = 'retrying';
const EMBED_SUCCESS_STAGE = 'embed-success';
const TikTokEmbed = (_a) => {
    var _b, _c;
    var { url, width, height, linkText = 'View post on TikTok', placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false, scriptLoadDisabled = false, retryDelay = 5000, retryDisabled = false, debug = false } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "retryDelay", "retryDisabled", "debug"]);
    const [stage, setStage] = react_1.default.useState(PROCESS_EMBED_STAGE);
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    const [processTime, setProcessTime] = react_1.default.useState(Date.now());
    const embedContainerKey = react_1.default.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
    // Debug Output
    react_1.default.useEffect(() => {
        debug && console.log(`[${new Date().toISOString()}]: ${stage}`);
    }, [debug, stage]);
    // === === === === === === === === === === === === === === === === === === ===
    // Embed Stages
    // === === === === === === === === === === === === === === === === === === ===
    // Process Embed Stage
    react_1.default.useEffect(() => {
        if (stage === PROCESS_EMBED_STAGE) {
            if (typeof document !== 'undefined' && !scriptLoadDisabled) {
                const scriptId = `tiktok-embed-script`;
                const prevScript = document.getElementById(scriptId);
                if (prevScript) {
                    prevScript.remove();
                }
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', `${embedJsScriptSrc}?t=${Date.now()}`);
                scriptElement.setAttribute('id', scriptId);
                document.head.appendChild(scriptElement);
                setStage(CONFIRM_EMBED_SUCCESS_STAGE);
            }
        }
    }, [scriptLoadDisabled, stage]);
    // Confirm Embed Success Stage
    react_1.default.useEffect(() => {
        let confirmInterval = undefined;
        let retryTimeout = undefined;
        if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
            confirmInterval = setInterval(() => {
                if (typeof document !== 'undefined') {
                    const preEmbedElement = document.getElementById(uuidRef.current);
                    if (!preEmbedElement) {
                        setStage(EMBED_SUCCESS_STAGE);
                    }
                }
            }, 1);
            if (!retryDisabled) {
                retryTimeout = setTimeout(() => {
                    setStage(RETRYING_STAGE);
                }, retryDelay);
            }
        }
        return () => {
            clearInterval(confirmInterval);
            clearTimeout(retryTimeout);
        };
    }, [retryDelay, retryDisabled, stage]);
    // Retrying Stage
    react_1.default.useEffect(() => {
        if (stage === RETRYING_STAGE) {
            // This forces the embed container to remount
            setProcessTime(Date.now());
            setStage(PROCESS_EMBED_STAGE);
        }
    }, [stage]);
    // END Embed Stages
    // === === === === === === === === === === === === === === === === === === ===
    // Format: https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1
    const embedId = url.replace(/[?].*$/, '').replace(/^.+\//, '');
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
        border: 'solid 1px rgba(22,24,35,0.12)',
        borderRadius,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: url, imageUrl: placeholderImageUrl, linkText: linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) })));
    // === END Placeholder ===
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-tiktok-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined, borderRadius }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement("div", { className: "tiktok-embed-container" },
            react_1.default.createElement("blockquote", { key: embedContainerKey, className: "tiktok-embed", cite: url, "data-video-id": embedId }, !placeholderDisabled ? (react_1.default.createElement("div", { id: uuidRef.current, style: { display: 'flex', justifyContent: 'center' } }, placeholder)) : (react_1.default.createElement("div", { id: uuidRef.current, style: { display: 'none' } }, "\u00A0"))))));
};
exports.TikTokEmbed = TikTokEmbed;
