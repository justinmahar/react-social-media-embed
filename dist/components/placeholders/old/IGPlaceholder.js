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
exports.IGPlaceholder = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const uuid_1 = require("../../uuid");
const CaptionPlaceholder_1 = require("../parts/CaptionPlaceholder");
const EngagementIconsPlaceholder_1 = require("../parts/EngagementIconsPlaceholder");
const ProfilePlaceholder_1 = require("../parts/ProfilePlaceholder");
const Spinner_1 = require("../parts/Spinner");
const IGPlaceholder = (_a) => {
    var divProps = __rest(_a, []);
    const url = '#';
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({}, divProps.style) }),
        react_1.default.createElement("div", { style: {
                background: '#FFF',
                borderRadius: '3px',
                border: '1px solid #dee2e6',
                margin: 0,
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)',
            } },
            react_1.default.createElement("div", { className: "instagram-media-pre-embed", id: uuidRef.current, style: { padding: '16px 0' } },
                react_1.default.createElement("a", { href: `${url}?utm_source=ig_embed&utm_campaign=loading`, style: {
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                    }, target: "_blank", rel: "noopener noreferrer" },
                    react_1.default.createElement(IGHeader, null),
                    react_1.default.createElement(IGBody, { url: url, linkText: 'View this post on Instagram' }),
                    react_1.default.createElement(IGFooter, null))))));
};
exports.IGPlaceholder = IGPlaceholder;
const IGHeader = () => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            paddingLeft: 16,
            paddingRight: 16,
        } },
        react_1.default.createElement(ProfilePlaceholder_1.ProfilePlaceholder, null),
        react_1.default.createElement(Spinner_1.Spinner, { size: 30 })));
};
const IGBody = (props) => {
    return (react_1.default.createElement("div", { className: "instagram-media-body" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: { padding: '70px 0' } }),
            react_1.default.createElement("div", { style: { display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' } },
                !props.linkTextDisabled && !!props.linkText && react_1.default.createElement(InstagramLogo, null),
                props.linkTextDisabled && react_1.default.createElement("span", { style: { visibility: 'hidden' } }, "\u00A0")),
            react_1.default.createElement("div", { style: { paddingTop: '8px' } },
                react_1.default.createElement("div", { style: {
                        color: '#000000',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 550,
                        lineHeight: '18px',
                    } },
                    !props.linkTextDisabled && !!props.linkText && props.linkText,
                    props.linkTextDisabled && react_1.default.createElement("span", { style: { visibility: 'hidden' } }, "\u00A0"))),
            react_1.default.createElement("div", { style: { padding: '70px 0' } }))));
};
const IGFooter = () => {
    return (react_1.default.createElement("div", { style: { paddingLeft: 16, paddingRight: 16 } },
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'row', marginBottom: 14, justifyContent: 'space-between' } },
            react_1.default.createElement(EngagementIconsPlaceholder_1.EngagementIconsPlaceholder, null),
            react_1.default.createElement(BookmarkIcon, null)),
        react_1.default.createElement(CaptionPlaceholder_1.CaptionPlaceholder, { style: { marginBottom: 24 } })));
};
const BookmarkIcon = (props) => {
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("div", { style: {
                width: '0px',
                borderTop: '8px solid #F4F4F4',
                borderRight: '8px solid transparent',
                transform: 'translateY(14px)',
            } }),
        react_1.default.createElement("div", { style: {
                backgroundColor: '#F4F4F4',
                height: '12px',
                width: '16px',
                transform: 'translateY(-6px)',
            } }),
        react_1.default.createElement("div", { style: {
                width: 0,
                height: 0,
                borderTop: '8px solid #F4F4F4',
                borderLeft: '8px solid transparent',
                transform: 'translateY(-6px) translateX(8px)',
            } })));
};
const InstagramLogo = () => {
    return (react_1.default.createElement("svg", { width: "50px", height: "50px", viewBox: "0 0 60 60", version: "1.1", xmlns: "https://www.w3.org/2000/svg", xmlnsXlink: "https://www.w3.org/1999/xlink" },
        react_1.default.createElement("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { transform: "translate(-511.000000, -20.000000)", fill: "#000000" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { d: "M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" }))))));
};
