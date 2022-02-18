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
exports.FacebookEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const defaultEmbedWidth = 550;
const maxPlaceholderWidth = defaultEmbedWidth;
const defaultPlaceholderHeight = 372;
const borderRadius = 3;
const FacebookEmbed = (_a) => {
    var _b, _c;
    var { url, width, height, linkText = 'View post on Facebook', embedPlaceholder, placeholderDisabled, scriptLoadDisabled, placeholderImageUrl, placeholderProps } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "placeholderImageUrl", "placeholderProps"]);
    const [ready, setReady] = react_1.default.useState(false);
    const [processTime, setProcessTime] = react_1.default.useState(-1);
    const [show, setShow] = react_1.default.useState(true);
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    react_1.default.useEffect(() => {
        var _a, _b;
        if (show && typeof window !== 'undefined') {
            // https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse/
            (_b = (_a = window.FB) === null || _a === void 0 ? void 0 : _a.XFBML) === null || _b === void 0 ? void 0 : _b.parse();
        }
        setProcessTime(Date.now());
    }, [show]);
    // Check for successful embed, mark as ready
    react_1.default.useEffect(() => {
        let timeout = undefined;
        if (!ready) {
            timeout = setInterval(() => {
                if (typeof document !== 'undefined') {
                    const fbPostContainerElement = document.getElementById(uuidRef.current);
                    if (fbPostContainerElement) {
                        const fbPostElem = fbPostContainerElement.getElementsByClassName('fb-post')[0];
                        if (fbPostElem) {
                            if (fbPostElem.children.length > 0) {
                                setReady(true);
                            }
                        }
                    }
                }
            }, 10);
        }
        return () => clearInterval(timeout);
    }, [ready]);
    react_1.default.useEffect(() => {
        var _a, _b;
        if (typeof document !== 'undefined' && typeof window !== 'undefined' && !scriptLoadDisabled) {
            if (!((_b = (_a = window.FB) === null || _a === void 0 ? void 0 : _a.XFBML) === null || _b === void 0 ? void 0 : _b.parse)) {
                const scriptElement = document.createElement('script');
                scriptElement.setAttribute('src', `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2`);
                document.head.appendChild(scriptElement);
            }
        }
    }, [scriptLoadDisabled]);
    const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes('%'));
    const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes('%'));
    // === Placeholder ===
    const placeholderStyle = {
        maxWidth: isPercentageWidth ? undefined : maxPlaceholderWidth,
        width: typeof width !== 'undefined' ? (isPercentageWidth ? '100%' : width) : '100%',
        height: isPercentageHeight
            ? '100%'
            : typeof height !== 'undefined'
                ? height
                : typeof ((_b = divProps.style) === null || _b === void 0 ? void 0 : _b.height) !== 'undefined' || typeof ((_c = divProps.style) === null || _c === void 0 ? void 0 : _c.maxHeight) !== 'undefined'
                    ? '100%'
                    : defaultPlaceholderHeight,
        border: '1px solid #dee2e6',
        borderRadius,
    };
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: url, imageUrl: placeholderImageUrl, linkText: linkText }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) })));
    // === END Placeholder ===
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-facebook-embed', divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined, borderRadius }, divProps.style) }),
        react_1.default.createElement(EmbedStyle_1.EmbedStyle, null),
        react_1.default.createElement("div", { id: uuidRef.current, className: (0, classnames_1.default)(!ready && 'rsme-d-none') },
            react_1.default.createElement("div", { className: "fb-post", "data-href": url, style: {
                    width: isPercentageWidth ? '100%' : width !== null && width !== void 0 ? width : defaultEmbedWidth,
                    height: isPercentageHeight ? '100%' : height !== null && height !== void 0 ? height : undefined,
                } })),
        !ready && !placeholderDisabled && placeholder));
};
exports.FacebookEmbed = FacebookEmbed;
