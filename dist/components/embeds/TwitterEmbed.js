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
exports.TwitterEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const react_twitter_embed_1 = require("react-twitter-embed");
const EmbedPlaceholder_1 = require("../placeholders/EmbedPlaceholder");
const uuid_1 = require("../uuid");
const EmbedStyle_1 = require("./EmbedStyle");
const TwitterEmbed = ({ url, twitterTweetEmbedProps, width, height, embedPlaceholder, placeholderDisabled, ...divProps }) => {
    const uuidRef = React.useRef((0, uuid_1.generateUUID)());
    const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');
    const placeholder = embedPlaceholder ?? (React.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { url: url, style: {
            width: divProps.style?.width ? '100%' : width ?? '100%',
            height: divProps.style?.height ? '100%' : height ?? 400,
            borderRadius: divProps.style?.borderRadius ?? '12px',
            borderColor: '#c9d4d9',
            minWidth: 250,
            maxWidth: 550,
        } }));
    return (React.createElement("div", { ...divProps, className: (0, classnames_1.default)('rsme-embed rsme-twitter-embed', divProps.className), style: {
            overflow: 'hidden',
            width: width ?? undefined,
            height: height ?? undefined,
            ...divProps.style,
        } },
        React.createElement(EmbedStyle_1.EmbedStyle, null),
        React.createElement(react_twitter_embed_1.TwitterTweetEmbed, { tweetId: tweetId, placeholder: placeholderDisabled ? undefined : placeholder, ...twitterTweetEmbedProps })));
};
exports.TwitterEmbed = TwitterEmbed;
