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
exports.TikTokEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_helmet_1 = require("react-helmet");
const styled_components_1 = __importDefault(require("styled-components"));
const defaultLinkText = 'View this post on TikTok';
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 1000;
const defaultRetryBackoffMaxDelay = 30000;
const defaultBackgroundBlurAnimationDuration = 700;
const embedScriptLoaded = false;
const TikTokEmbed = ({ url, backgroundUrl, linkText = defaultLinkText, processDelay = defaultProcessDelay, scriptLoadDisabled = false, linkTextDisabled = false, backgroundBlurDisabled = false, backgroundBlurAnimationDisabled = false, backgroundBlurAnimationDuration = defaultBackgroundBlurAnimationDuration, spinnerDisabled = false, softFilterDisabled = false, retryDisabled = false, retryInitialDelay = defaultRetryInitialDelay, retryBackoffMaxDelay = defaultRetryBackoffMaxDelay, ...divProps }) => {
    // Format: https://www.tiktok.com/@planterina/video/6984391185867574533
    const embedId = url.replace(/[?].*$/, '').replace(/^.+\//, '');
    // console.log(embedId);
    const urlStripped = url.replace(/[?].*/, '');
    const [initialized, setInitialized] = React.useState(false);
    const [processTime, setProcessTime] = React.useState(-1);
    const [retryDelay, setRetryDelay] = React.useState(retryInitialDelay);
    const [retrying, setRetrying] = React.useState(false);
    const [retryTime, setRetryTime] = React.useState(-1);
    const uuidRef = React.useRef(generateUUID());
    React.useEffect(() => {
        const win = typeof window !== 'undefined' ? window : undefined;
        if (win && processTime >= 0) {
            // This call will use the TikTok embed script to process all elements with the `tiktok-embed` class name.
            if (win.instgrm?.Embeds) {
                // console.log('Processing...', Date.now());
                win.instgrm.Embeds.process();
            }
            else {
                console.error('TikTok embed script not found. Unable to process TikTok embed:', url);
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
    const urlWithNoQuery = url.replace(/[?].*$/, '');
    const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;
    return (React.createElement(TikTokWrapperDiv, { style: { width: '100%', maxWidth: 605, minWidth: 325, minHeight: 500, ...divProps.style } },
        React.createElement("div", { className: (0, classnames_1.default)('tiktok-embed-container', divProps.className), style: { overflow: 'hidden', width: '100%', maxWidth: '540px', ...divProps.style }, key: `${uuidRef}-${retryTime}` },
            !scriptLoadDisabled && (React.createElement(react_helmet_1.Helmet, { key: `tt-embed-${processTime}` }, React.createElement("script", { src: `https://www.tiktok.com/embed.js?t=${processTime}` }))),
            React.createElement("blockquote", { className: "tiktok-embed d-flex justify-content-center w-100", cite: url, "data-video-id": embedId, ...divProps, style: {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    ...divProps.style,
                } },
                React.createElement("div", { className: "tiktok-pre-embed", id: uuidRef.current, style: {
                        padding: '16px 0',
                        background: '#FFF',
                        borderRadius: '3px',
                        border: '1px solid #dee2e6',
                        // maxWidth: '325px',
                    } },
                    React.createElement("a", { href: `${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`, style: {
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                        }, target: "_blank", rel: "noreferrer" },
                        React.createElement(TikTokHeader, { showSpinner: !spinnerDisabled }),
                        React.createElement(TikTokBody, { url: cleanUrlWithEndingSlash, backgroundUrl: backgroundUrl, linkText: linkText, linkTextDisabled: linkTextDisabled, backgroundBlurDisabled: backgroundBlurDisabled, backgroundBlurAnimationDisabled: retrying || backgroundBlurAnimationDisabled, backgroundBlurAnimationDuration: backgroundBlurAnimationDuration, softFilterDisabled: softFilterDisabled }),
                        React.createElement(TikTokFooter, null)))))));
};
exports.TikTokEmbed = TikTokEmbed;
const TikTokHeader = (props) => {
    return (React.createElement("div", { className: "tiktok-embed-header", style: { display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 16px' } },
        React.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                flexGrow: 0,
                height: '40px',
                marginRight: '14px',
                width: '40px',
            } }),
        React.createElement("div", { style: { display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' } },
            React.createElement("div", { style: {
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    marginBottom: '6px',
                    width: '100px',
                } }),
            React.createElement("div", { style: {
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    width: '60px',
                } })),
        props.showSpinner && (React.createElement("div", null,
            React.createElement(Spinner, { size: 30 })))));
};
const TikTokBody = (props) => {
    return (React.createElement(TikTokBodyDiv, { backgroundBlurAnimationDuration: Math.abs(typeof props.backgroundBlurAnimationDuration === 'number'
            ? props.backgroundBlurAnimationDuration
            : defaultBackgroundBlurAnimationDuration), className: "tiktok-embed-body", style: {
            backgroundImage: props.backgroundUrl ? `url("${props.backgroundUrl}")` : undefined,
            backgroundRepeat: props.backgroundUrl ? 'no-repeat' : undefined,
            backgroundPosition: props.backgroundUrl ? 'center' : undefined,
            backgroundSize: props.backgroundUrl ? 'cover' : undefined,
            marginTop: props.backgroundUrl ? '16px' : undefined,
            marginBottom: props.backgroundUrl ? '16px' : undefined,
        } },
        React.createElement("div", { className: props.backgroundBlurDisabled || props.backgroundBlurAnimationDisabled ? undefined : 'backdrop-blur', style: {
                backdropFilter: props.backgroundBlurDisabled || !props.backgroundBlurAnimationDisabled ? undefined : 'blur(4px)',
                WebkitBackdropFilter: props.backgroundBlurDisabled || !props.backgroundBlurAnimationDisabled ? undefined : 'blur(4px)',
                backgroundColor: props.softFilterDisabled ? undefined : 'rgba(255,255,255,0.7)',
            } },
            React.createElement("div", { style: { padding: '16% 0' } }),
            React.createElement("div", { style: { display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' } }, props.linkTextDisabled && React.createElement("span", { style: { visibility: 'hidden' } }, "\u00A0")),
            React.createElement("div", { style: { paddingTop: '8px' } },
                React.createElement("div", { style: {
                        color: '#000000',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 550,
                        lineHeight: '18px',
                    } },
                    !props.linkTextDisabled && !!props.linkText && props.linkText,
                    props.linkTextDisabled && React.createElement("span", { style: { visibility: 'hidden' } }, "\u00A0"))),
            React.createElement("div", { style: { padding: '15.5% 0' } }))));
};
const TikTokFooter = () => {
    return (React.createElement("div", { className: "tiktok-embed-footer", style: { padding: '0 16px' } },
        React.createElement("div", { style: { display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' } },
            React.createElement("div", null,
                React.createElement("div", { style: {
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '12.5px',
                        width: '12.5px',
                        transform: 'translateX(0px) translateY(7px)',
                    } }),
                React.createElement("div", { style: {
                        backgroundColor: '#F4F4F4',
                        height: '12.5px',
                        transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                        width: '12.5px',
                        flexGrow: 0,
                        marginRight: '14px',
                        marginLeft: '2px',
                    } }),
                React.createElement("div", { style: {
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '12.5px',
                        width: '12.5px',
                        transform: 'translateX(9px) translateY(-18px)',
                    } })),
            React.createElement("div", { style: { marginLeft: '8px' } },
                React.createElement("div", { style: {
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '20px',
                        width: '20px',
                    } }),
                React.createElement("div", { style: {
                        width: 0,
                        height: 0,
                        borderTop: '2px solid transparent',
                        borderLeft: '6px solid #f4f4f4',
                        borderBottom: '2px solid transparent',
                        transform: 'translateX(16px) translateY(-4px) rotate(30deg)',
                    } })),
            React.createElement("div", { style: { marginLeft: 'auto' } },
                React.createElement("div", { style: {
                        width: '0px',
                        borderTop: '8px solid #F4F4F4',
                        borderRight: '8px solid transparent',
                        transform: 'translateY(16px)',
                    } }),
                React.createElement("div", { style: {
                        backgroundColor: '#F4F4F4',
                        flexGrow: 0,
                        height: '12px',
                        width: '16px',
                        transform: 'translateY(-4px)',
                    } }),
                React.createElement("div", { style: {
                        width: 0,
                        height: 0,
                        borderTop: '8px solid #F4F4F4',
                        borderLeft: '8px solid transparent',
                        transform: 'translateY(-4px) translateX(8px)',
                    } }))),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                marginBottom: '24px',
            } },
            React.createElement("div", { style: {
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    marginBottom: '6px',
                    width: '224px',
                } }),
            React.createElement("div", { style: { backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' } }))));
};
// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
const generateUUID = () => {
    // Public Domain/MIT
    let d = new Date().getTime(); //Timestamp
    let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        }
        else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};
const Spinner = styled_components_1.default.div `
  & {
    border: ${(props) => Math.max(Math.round(0.13333 * props.size), 1)}px solid #f3f3f3; /* Light grey */
    border-top: ${(props) => Math.max(Math.round(0.13333 * props.size), 1)}px solid #000000; /* Black */
    border-radius: 50%;
    width: ${(props) => Math.max(props.size, 1)}px;
    height: ${(props) => Math.max(props.size, 1)}px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const TikTokBodyDiv = styled_components_1.default.div `
  .backdrop-blur {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    animation: bgBlur ${(props) => props.backgroundBlurAnimationDuration / 1000}s ease 1;
  }

  @keyframes bgBlur {
    0% {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    100% {
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }
`;
const TikTokWrapperDiv = styled_components_1.default.div `
  & > div {
    width: 100%;
  }
`;
