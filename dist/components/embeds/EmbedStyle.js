"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedStyle = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const EmbedStyle = (_a) => {
    var styleProps = __rest(_a, []);
    return (react_1.default.createElement("style", Object.assign({}, styleProps, { className: (0, classnames_1.default)(styleProps.className), style: Object.assign({}, styleProps.style) }), `
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

        .rsme-embed.rsme-facebook-embed .fb-post iframe {
          width: 100% !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post span {
          width: 100% !important;
        }
      `));
};
exports.EmbedStyle = EmbedStyle;
