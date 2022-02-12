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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedPlaceholder = void 0;
const React = __importStar(require("react"));
function EmbedPlaceholder({ url, image, ...divProps }) {
    return (React.createElement("div", { ...divProps, style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'solid 1px gray',
            borderRadius: '3px',
            width: 540,
            height: 540,
            backgroundImage: image ? `url("${image}")` : undefined,
            backgroundRepeat: image ? 'no-repeat' : undefined,
            backgroundPosition: image ? 'center' : undefined,
            backgroundSize: image ? 'cover' : undefined,
            ...divProps.style,
        } },
        React.createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: 'none', color: 'inherit' } },
            React.createElement("div", null,
                React.createElement("div", { style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    } },
                    React.createElement("div", null, "View Post"))))));
}
exports.EmbedPlaceholder = EmbedPlaceholder;
