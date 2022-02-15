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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const IGPlaceholder_1 = require("../placeholders/IGPlaceholder");
require("../rsme.css");
const uuid_1 = require("../uuid");
const defaultIgVersion = '14';
const defaultLinkText = 'View this post on Instagram';
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 1000;
const defaultRetryBackoffMaxDelay = 30000;
let embedScriptLoaded = false;
const InstagramEmbed = ({ url, igVersion = defaultIgVersion, linkText = defaultLinkText, processDelay = defaultProcessDelay, scriptLoadDisabled = false, retryDisabled = false, retryInitialDelay = defaultRetryInitialDelay, retryBackoffMaxDelay = defaultRetryBackoffMaxDelay, ...divProps }) => {
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
                // console.log('Processing...', Date.now());
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
        if (typeof document !== 'undefined' && !scriptLoadDisabled && !embedScriptLoaded) {
            const win = typeof window !== 'undefined' ? window : undefined;
            if (!win.instgrm?.Embeds) {
                const igScript = document.createElement('script');
                igScript.setAttribute('src', '//www.instagram.com/embed.js');
                document.head.appendChild(igScript);
            }
            embedScriptLoaded = true;
        }
    }, [scriptLoadDisabled]);
    const urlWithNoQuery = url.replace(/[?].*$/, '');
    const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;
    const placeholder = (React.createElement(IGPlaceholder_1.IGPlaceholder, { className: "instagram-media-pre-embed", id: uuidRef.current, style: {
            width: 'calc(100% + 2px)',
        } }));
    return (React.createElement("div", { className: (0, classnames_1.default)('rsme-embed rsme-instagram-embed', divProps.className), style: { overflow: 'hidden', width: '100%', maxWidth: '540px', ...divProps.style }, key: `${uuidRef}-${retryTime}` },
        React.createElement("blockquote", { className: "instagram-media", "data-instgrm-permalink": `${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`, "data-instgrm-version": igVersion, style: {
                margin: 0,
                maxWidth: '540px',
                minWidth: '326px',
                width: 'calc(100% - 2px)',
                ...divProps.style,
            } }, placeholder)));
};
exports.InstagramEmbed = InstagramEmbed;
