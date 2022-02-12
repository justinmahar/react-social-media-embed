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
exports.LinkedInEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const EmbedPlaceholder_1 = require("./EmbedPlaceholder");
const LinkedInEmbed = ({ url, iframeCode: embedMeta, ...divProps }) => {
    const [showPlaceholder, setShowPlaceholder] = React.useState(true);
    let embedId = '0000000000000000000';
    let height = 330;
    try {
        const embedIdMatch = (embedMeta || '').match(/urn:li:share:([\d]+)/);
        if (embedIdMatch) {
            embedId = embedIdMatch[1];
        }
        const heightMatch = (embedMeta || '').match(/height="([\d]+)"/);
        if (heightMatch) {
            height = Number.parseInt(heightMatch[1]);
        }
    }
    catch (e) {
        console.error(e);
    }
    return (React.createElement("div", { ...divProps, className: (0, classnames_1.default)(divProps.className), style: { ...divProps.style } },
        React.createElement("div", { className: "linkedin-embed-container", style: { width: '100%', minWidth: 300, maxWidth: 550, position: 'relative' } },
            React.createElement("iframe", { src: `https://www.linkedin.com/embed/feed/update/urn:li:share:${embedId}`, width: "100%", height: showPlaceholder ? 0 : height, frameBorder: "0", onLoad: () => setShowPlaceholder(false) }),
            showPlaceholder && React.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { url: url }))));
};
exports.LinkedInEmbed = LinkedInEmbed;
