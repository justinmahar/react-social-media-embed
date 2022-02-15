"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const react_helmet_1 = require("react-helmet");
const __1 = require("../..");
const uuid_1 = require("../uuid");
require("../rsme.css");
// https://developers.facebook.com/docs/plugins/embedded-posts/?prefill_href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2F451971596293956#code-generator
const FacebookEmbed = ({ url, width, height, embedPlaceholder, placeholderDisabled, ...divProps }) => {
    const [ready, setReady] = react_1.default.useState(false);
    const [processTime, setProcessTime] = react_1.default.useState(-1);
    const [show, setShow] = react_1.default.useState(true);
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    react_1.default.useEffect(() => {
        if (show && typeof window !== 'undefined') {
            // https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse/
            window.FB?.XFBML?.parse();
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
    const placeholder = embedPlaceholder ?? (react_1.default.createElement(__1.EmbedPlaceholder, { url: url, style: {
            width: divProps.style?.width ? '100%' : width ?? 550,
            height: divProps.style?.height ? '100%' : height ?? 372,
            borderRadius: divProps.style?.borderRadius ?? 3,
        } }));
    return (react_1.default.createElement("div", { ...divProps, className: (0, classnames_1.default)('rsme-embed rsme-facebook-embed', divProps.className), style: {
            overflow: 'hidden',
            width: width ?? undefined,
            height: height ?? undefined,
            ...divProps.style,
        } },
        react_1.default.createElement("div", { id: uuidRef.current, className: (0, classnames_1.default)(!ready && 'rsme-d-none') },
            react_1.default.createElement("div", { className: "fb-post", "data-href": url })),
        processTime > 0 && (react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("script", { src: `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2` }))),
        !ready && !placeholderDisabled && placeholder));
};
exports.FacebookEmbed = FacebookEmbed;
