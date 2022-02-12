"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const react_helmet_1 = require("react-helmet");
// https://developers.facebook.com/docs/plugins/embedded-posts/?prefill_href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2F451971596293956#code-generator
const FacebookEmbed = ({ url, ...divProps }) => {
    const [processTime, setProcessTime] = react_1.default.useState(-1);
    const [show, setShow] = react_1.default.useState(true);
    react_1.default.useEffect(() => {
        const timeout = setTimeout(() => {
            if (typeof document !== 'undefined') {
                [...document.getElementsByTagName('script')].forEach((script) => {
                    // if (script.src.includes('connect.facebook.net')) {
                    //   console.log('Removing', script);
                    //   script.remove();
                    // }
                });
                window.FB = undefined;
                setProcessTime(Date.now());
            }
        }, 1000);
        return () => clearTimeout(timeout);
    }, [show]);
    return (react_1.default.createElement("div", { ...divProps, className: (0, classnames_1.default)(divProps.className), style: { ...divProps.style } },
        react_1.default.createElement("div", { className: "fb-post", "data-href": url }),
        processTime > 0 && (react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("script", { key: `facebook-embed-${processTime}`, src: `https://connect.facebook.net/en_US/sdk.js?t=${processTime}#xfbml=1&version=v3.2` })))));
};
exports.FacebookEmbed = FacebookEmbed;
