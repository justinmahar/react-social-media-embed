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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedPlaceholder = void 0;
const React = __importStar(require("react"));
const Spinner_1 = require("./Spinner");
function EmbedPlaceholder(_a) {
    var { url, image } = _a, divProps = __rest(_a, ["url", "image"]);
    return (React.createElement("div", Object.assign({}, divProps, { style: Object.assign({ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 1px rgb(219, 219, 219)', borderRadius: '5px', boxSizing: 'border-box', width: 540, height: 540, backgroundImage: image ? `url("${image}")` : undefined, backgroundRepeat: image ? 'no-repeat' : undefined, backgroundPosition: image ? 'center' : undefined, backgroundSize: image ? 'cover' : undefined }, divProps.style) }),
        React.createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: 'none', color: 'inherit' } },
            React.createElement("div", null,
                React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        rowGap: '10px',
                        width: '100%',
                        height: '100%',
                        fontFamily: 'sans-serif',
                    } },
                    React.createElement("div", null,
                        React.createElement(Spinner_1.Spinner, { size: 30 })),
                    React.createElement("div", null, "View this post"))))));
}
exports.EmbedPlaceholder = EmbedPlaceholder;
