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
const React = __importStar(require("react"));
const react_youtube_1 = __importDefault(require("react-youtube"));
const styled_components_1 = __importDefault(require("styled-components"));
const YouTubeEmbed = ({ url, ...divProps }) => {
    let ytVideoId = '00000000';
    const match = url.match(/[?&]v=(.+?)(?:$|[&])/);
    if (match) {
        ytVideoId = match[1];
    }
    console.log('ytVideoId', ytVideoId);
    return (React.createElement(YTDiv, { ...divProps, style: { maxWidth: 550, width: '100%', ...divProps.style } },
        React.createElement(react_youtube_1.default, { className: "yt-div", videoId: ytVideoId, opts: {
                playerVars: { autoplay: 0, controls: 0, modestbranding: 1 },
            } })));
};
exports.YouTubeEmbed = YouTubeEmbed;
const YTDiv = styled_components_1.default.div `
  border-radius: 5px;
  iframe {
    width: 100% !important;
  }
`;
