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
exports.PlaceholderEmbed = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const EngagementIconsPlaceholder_1 = require("./parts/EngagementIconsPlaceholder");
const ProfilePlaceholder_1 = require("./parts/ProfilePlaceholder");
const Spinner_1 = require("./parts/Spinner");
const PlaceholderEmbed = (_a) => {
    var { url, linkText = 'View post', imageUrl } = _a, divProps = __rest(_a, ["url", "linkText", "imageUrl"]);
    return (react_1.default.createElement("div", Object.assign({}, divProps, { className: (0, classnames_1.default)(divProps.className), style: Object.assign({ overflow: 'hidden', border: '1px solid #dee2e6', backgroundColor: '#ffffff', borderRadius: 0, boxSizing: 'border-box', position: 'relative' }, divProps.style) }),
        react_1.default.createElement("a", { href: url, style: { textDecoration: 'none' }, target: "_blank", rel: "noopener noreferrer" },
            !imageUrl && (react_1.default.createElement("div", { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16,
                    zIndex: 2,
                    backgroundColor: '#ffffff',
                } },
                react_1.default.createElement(ProfilePlaceholder_1.ProfilePlaceholder, null))),
            react_1.default.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: imageUrl ? 'start' : 'center',
                    height: '100%',
                    width: '100%',
                } },
                !imageUrl && (react_1.default.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        rowGap: 16,
                        zIndex: 3,
                        padding: 8,
                        backgroundColor: '#ffffff',
                    } },
                    react_1.default.createElement(Spinner_1.Spinner, { size: 30 }),
                    !!linkText && (react_1.default.createElement("div", { style: {
                            color: '#000000',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 550,
                            lineHeight: '18px',
                            textAlign: 'center',
                        } }, linkText)))),
                imageUrl && (react_1.default.createElement("div", { style: { width: '100%', paddingBottom: 40 } },
                    react_1.default.createElement("img", { src: imageUrl, style: { width: '100%' } })))),
            react_1.default.createElement("div", { style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: 40,
                    width: '100%',
                    backgroundColor: '#ffffff',
                    zIndex: 1,
                } },
                !imageUrl && (react_1.default.createElement(EngagementIconsPlaceholder_1.EngagementIconsPlaceholder, { style: {
                        marginLeft: 16,
                    } })),
                imageUrl && (react_1.default.createElement("div", { style: {
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        columnGap: 16,
                    } },
                    react_1.default.createElement("div", { style: {
                            color: '#0095f6',
                            fontWeight: 600,
                            fontFamily: 'Arial,sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            whiteSpace: 'nowrap',
                            marginLeft: 16,
                        } }, linkText),
                    react_1.default.createElement(Spinner_1.Spinner, { style: { marginRight: 16 } })))))));
};
exports.PlaceholderEmbed = PlaceholderEmbed;
