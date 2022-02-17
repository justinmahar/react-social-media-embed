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
exports.ShareArrowIcon = exports.ChatBubbleIcon = exports.HeartIcon = exports.EngagementIconsPlaceholder = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const EngagementIconsPlaceholder = (_a) => {
    var divProps = __rest(_a, []);
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ display: 'flex', alignItems: 'center', columnGap: 14 }, divProps.style) }),
        react_1.default.createElement(exports.HeartIcon, null),
        react_1.default.createElement(exports.ChatBubbleIcon, null),
        react_1.default.createElement(exports.ShareArrowIcon, null)));
};
exports.EngagementIconsPlaceholder = EngagementIconsPlaceholder;
const HeartIcon = (props) => {
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                height: '12.5px',
                width: '12.5px',
                transform: 'translateX(0px) translateY(7px)',
            } }),
        react_1.default.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                height: '12.5px',
                transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                width: '12.5px',
                flexGrow: 0,
                marginRight: '6px',
                marginLeft: '2px',
            } }),
        react_1.default.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                height: '12.5px',
                width: '12.5px',
                transform: 'translateX(9px) translateY(-18px)',
            } })));
};
exports.HeartIcon = HeartIcon;
const ChatBubbleIcon = (props) => {
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                height: '20px',
                width: '20px',
            } }),
        react_1.default.createElement("div", { style: {
                width: 0,
                height: 0,
                borderTop: '2px solid transparent',
                borderLeft: '6px solid #f4f4f4',
                borderBottom: '2px solid transparent',
                transform: 'translateX(16px) translateY(-4px) rotate(30deg)',
            } })));
};
exports.ChatBubbleIcon = ChatBubbleIcon;
const ShareArrowIcon = (props) => {
    return (react_1.default.createElement("div", Object.assign({}, props, { style: {
            height: 25,
            width: 25,
            transform: 'translateX(0px) translateY(-2px)',
        } }),
        react_1.default.createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 512 512", xmlSpace: "preserve" },
            react_1.default.createElement("path", { style: { fill: '#F4F4F4' }, d: "M295.204,180.593C132.168,180.593,0,312.759,0,475.796\nc51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z" }),
            react_1.default.createElement("path", { style: { fill: '#F4F4F4' }, d: "M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794\nc59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z" }))));
};
exports.ShareArrowIcon = ShareArrowIcon;
