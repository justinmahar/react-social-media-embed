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
const EmbedPlaceholder_1 = require("../placeholders/EmbedPlaceholder");
const EmbedDiv_1 = require("./EmbedDiv");
const LinkedInEmbed = ({ postUrl, url, width, height = 500, embedPlaceholder, placeholderDisabled, ...divProps }) => {
    const [ready, setReady] = React.useState(false);
    const placeholder = embedPlaceholder ?? (React.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { url: postUrl ?? url, style: {
            width: divProps.style?.width ? '100%' : width ?? '100%',
            height: divProps.style?.height ? '100%' : height ?? 400,
            borderRadius: divProps.style?.borderRadius ?? '8px',
            borderColor: 'rgba(0, 0, 0, 0.15)',
            minWidth: 300,
            maxWidth: 550,
        } }));
    return (React.createElement("div", { ...divProps, className: (0, classnames_1.default)('rsme-embed rsme-linkedin-embed', divProps.className), style: {
            overflow: 'hidden',
            width: width ?? undefined,
            height: height ?? undefined,
            ...divProps.style,
        } },
        React.createElement(EmbedDiv_1.EmbedDiv, null,
            React.createElement("div", { className: "linkedin-embed-container", style: { width: '100%', minWidth: 300, maxWidth: 550, position: 'relative' } },
                React.createElement("iframe", { className: (0, classnames_1.default)('linkedin-post', !ready && 'rsme-d-none'), src: url, width: "100%", height: !ready ? 0 : height, frameBorder: "0", onLoad: () => setReady(true) }),
                true && !placeholderDisabled && placeholder))));
};
exports.LinkedInEmbed = LinkedInEmbed;
