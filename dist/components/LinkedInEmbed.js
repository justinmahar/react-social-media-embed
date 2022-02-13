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
const LinkedInEmbed = ({ postUrl, url, height = 330, ...divProps }) => {
    const [showPlaceholder, setShowPlaceholder] = React.useState(true);
    return (React.createElement("div", { ...divProps, className: (0, classnames_1.default)(divProps.className), style: { ...divProps.style } },
        React.createElement("div", { className: "linkedin-embed-container", style: { width: '100%', minWidth: 300, maxWidth: 550, position: 'relative' } },
            React.createElement("iframe", { src: url, width: "100%", height: showPlaceholder ? 0 : height, frameBorder: "0", onLoad: () => setShowPlaceholder(false) }),
            showPlaceholder && React.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { url: postUrl ?? url }))));
};
exports.LinkedInEmbed = LinkedInEmbed;
