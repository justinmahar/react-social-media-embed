"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedStyle = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const EmbedStyle = ({ ...styleProps }) => {
    return (react_1.default.createElement("style", { ...styleProps, className: (0, classnames_1.default)(styleProps.className), style: { ...styleProps.style } }, `
        .rsme-embed .rsme-d-none {
          display: none;
        }
    
        .rsme-embed .twitter-tweet {
          margin: 0 !important;
        }
    
        .rsme-embed blockquote {
          margin: 0 !important;
          padding: 0 !important;
        }
      `));
};
exports.EmbedStyle = EmbedStyle;
