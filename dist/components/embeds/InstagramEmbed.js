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
exports.InstagramEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_sub_unsub_1 = require("react-sub-unsub");
const useFrame_1 = require("../hooks/useFrame");
const PlaceholderEmbed_1 = require("../placeholder/PlaceholderEmbed");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const embedJsScriptSrc = '//www.instagram.com/embed.js';
const minPlaceholderWidth = 328;
const defaultPlaceholderHeight = 372;
const borderRadius = 3;
// Embed Stages
const CHECK_SCRIPT_STAGE = 'check-script';
const LOAD_SCRIPT_STAGE = 'load-script';
const CONFIRM_SCRIPT_LOADED_STAGE = 'confirm-script-loaded';
const PROCESS_EMBED_STAGE = 'process-embed';
const CONFIRM_EMBED_SUCCESS_STAGE = 'confirm-embed-success';
const RETRYING_STAGE = 'retrying';
const EMBED_SUCCESS_STAGE = 'embed-success';
const InstagramEmbed = (_a) => {
    var _b, _c;
    var { url, width, height, linkText = 'View post on Instagram', placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled = false, placeholderProps, embedPlaceholder, placeholderDisabled = false, scriptLoadDisabled = false, retryDelay = 5000, retryDisabled = false, igVersion = '14', frame = undefined, debug = false } = _a, divProps = __rest(_a, ["url", "width", "height", "linkText", "placeholderImageUrl", "placeholderSpinner", "placeholderSpinnerDisabled", "placeholderProps", "embedPlaceholder", "placeholderDisabled", "scriptLoadDisabled", "retryDelay", "retryDisabled", "igVersion", "frame", "debug"]);
    const [stage, setStage] = React.useState(CHECK_SCRIPT_STAGE);
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    const [processTime, setProcessTime] = React.useState(Date.now());
    const embedContainerKey = React.useMemo(() => `${uuidRef.current}-${processTime}`, [processTime]);
    const frm = (0, useFrame_1.useFrame)(frame);
    // Debug Output
    React.useEffect(() => {
        debug && console.log(`[${new Date().toISOString()}]: ${stage}`);
    }, [debug, stage]);
    // === === === === === === === === === === === === === === === === === === ===
    // Embed Stages
    // === === === === === === === === === === === === === === === === === === ===
    // Check Script Stage
    React.useEffect(() => {
        var _a, _b, _c;
        if (stage === CHECK_SCRIPT_STAGE) {
            if ((_c = (_b = (_a = frm.window) === null || _a === void 0 ? void 0 : _a.instgrm) === null || _b === void 0 ? void 0 : _b.Embeds) === null || _c === void 0 ? void 0 : _c.process) {
                setStage(PROCESS_EMBED_STAGE);
            }
            else if (!scriptLoadDisabled) {
                setStage(LOAD_SCRIPT_STAGE);
            }
            else {
                console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
            }
        }
    }, [scriptLoadDisabled, stage, url, frm.window]);
    // Load Script Stage
    React.useEffect(() => {
        if (stage === LOAD_SCRIPT_STAGE) {
            if (frm.document) {
                const scriptElement = frm.document.createElement('script');
                scriptElement.setAttribute('src', embedJsScriptSrc);
                frm.document.head.appendChild(scriptElement);
                setStage(CONFIRM_SCRIPT_LOADED_STAGE);
            }
        }
    }, [stage, frm.document]);
    // Confirm Script Loaded Stage
    React.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_SCRIPT_LOADED_STAGE) {
            subs.setInterval(() => {
                var _a, _b, _c;
                if ((_c = (_b = (_a = frm.window) === null || _a === void 0 ? void 0 : _a.instgrm) === null || _b === void 0 ? void 0 : _b.Embeds) === null || _c === void 0 ? void 0 : _c.process) {
                    setStage(PROCESS_EMBED_STAGE);
                }
            }, 1);
        }
        return subs.createCleanup();
    }, [stage, frm.window]);
    // Process Embed Stage
    React.useEffect(() => {
        var _a, _b, _c;
        if (stage === PROCESS_EMBED_STAGE) {
            const process = (_c = (_b = (_a = frm.window) === null || _a === void 0 ? void 0 : _a.instgrm) === null || _b === void 0 ? void 0 : _b.Embeds) === null || _c === void 0 ? void 0 : _c.process;
            if (process) {
                process();
                setStage(CONFIRM_EMBED_SUCCESS_STAGE);
            }
            else {
                console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
            }
        }
    }, [stage, frm.window, url]);
    // Confirm Embed Success Stage
    React.useEffect(() => {
        const subs = new react_sub_unsub_1.Subs();
        if (stage === CONFIRM_EMBED_SUCCESS_STAGE) {
            subs.setInterval(() => {
                if (frm.document) {
                    const preEmbedElement = frm.document.getElementById(uuidRef.current);
                    if (!preEmbedElement) {
                        setStage(EMBED_SUCCESS_STAGE);
                    }
                }
            }, 1);
            if (!retryDisabled) {
                subs.setTimeout(() => {
                    setStage(RETRYING_STAGE);
                }, retryDelay);
            }
        }
        return subs.createCleanup();
    }, [retryDelay, retryDisabled, stage, frm.document]);
    // Retrying Stage
    React.useEffect(() => {
        if (stage === RETRYING_STAGE) {
            // This forces the embed container to remount
            setProcessTime(Date.now());
            setStage(PROCESS_EMBED_STAGE);
        }
    }, [stage]);
    // END Embed Stages
    // === === === === === === === === === === === === === === === === === === ===
    const urlWithNoQuery = url.replace(/[?].*$/, '');
    const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;
    const isPercentageWidth = !!(width === null || width === void 0 ? void 0 : width.toString().includes('%'));
    const isPercentageHeight = !!(height === null || height === void 0 ? void 0 : height.toString().includes('%'));
    // === Placeholder ===
    const placeholderStyle = {
        minWidth: isPercentageWidth ? undefined : minPlaceholderWidth,
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
    const placeholder = embedPlaceholder !== null && embedPlaceholder !== void 0 ? embedPlaceholder : (React.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({ url: cleanUrlWithEndingSlash, imageUrl: placeholderImageUrl, linkText: linkText, spinner: placeholderSpinner, spinnerDisabled: placeholderSpinnerDisabled }, placeholderProps, { style: Object.assign(Object.assign({}, placeholderStyle), placeholderProps === null || placeholderProps === void 0 ? void 0 : placeholderProps.style) })));
    // === END Placeholder ===
    return (React.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)('rsme-embed rsme-instagram-embed', uuidRef.current, divProps.className), style: Object.assign({ overflow: 'hidden', width: width !== null && width !== void 0 ? width : undefined, height: height !== null && height !== void 0 ? height : undefined, borderRadius }, divProps.style) }),
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("blockquote", { key: embedContainerKey, className: "instagram-media", "data-instgrm-permalink": `${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`, "data-instgrm-version": igVersion, "data-instgrm-captioned": true, "data-width": isPercentageWidth ? '100%' : width !== null && width !== void 0 ? width : undefined, style: {
                width: 'calc(100% - 2px)',
            } },
            !placeholderDisabled && placeholder,
            React.createElement("div", { id: uuidRef.current, className: "instagram-media-pre-embed rsme-d-none" }, "\u00A0"))));
};
exports.InstagramEmbed = InstagramEmbed;
