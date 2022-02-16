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
exports.YouTubeEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_youtube_1 = __importDefault(require("react-youtube"));
const __1 = require("../..");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const YouTubeEmbed = ({ url, youTubeProps, width, height, embedPlaceholder, placeholderDisabled, ...divProps }) => {
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    const [ready, setReady] = React.useState(false);
    let videoId = '00000000';
    const videoIdMatch = url.match(/[?&]v=(.+?)(?:$|[&])/);
    if (videoIdMatch) {
        videoId = videoIdMatch[1];
    }
    let opts = {};
    if (typeof width !== 'undefined') {
        opts.width = `${width}`;
    }
    if (typeof height !== 'undefined') {
        opts.height = `${height}`;
    }
    opts = { ...opts, ...youTubeProps?.opts };
    const placeholder = embedPlaceholder ?? (React.createElement(__1.EmbedPlaceholder, { url: url, style: {
            width: divProps.style?.width ? '100%' : width ?? 640,
            height: divProps.style?.height ? '100%' : height ?? 360,
            borderRadius: divProps.style?.borderRadius ?? 0,
        } }));
    return (React.createElement("div", { ...divProps, className: (0, classnames_1.default)('rsme-embed rsme-youtube-embed', divProps.className), style: {
            overflow: 'hidden',
            width: width ?? undefined,
            height: height ?? undefined,
            ...divProps.style,
        } },
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement("div", { className: (0, classnames_1.default)(!ready && 'rsme-d-none') },
            React.createElement(react_youtube_1.default, { ...youTubeProps, className: youTubeProps?.className ?? 'youtube-iframe', videoId: youTubeProps?.videoId ?? videoId, opts: opts, onReady: (e) => {
                    setReady(true);
                    if (youTubeProps && youTubeProps.onReady) {
                        youTubeProps?.onReady(e);
                    }
                } })),
        !ready && !placeholderDisabled && placeholder));
};
exports.YouTubeEmbed = YouTubeEmbed;
