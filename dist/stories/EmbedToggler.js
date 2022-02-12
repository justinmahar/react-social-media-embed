"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedToggler = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
require("./button.css");
const EmbedToggler = ({ ...divProps }) => {
    const [show, setShow] = react_1.default.useState(true);
    return (react_1.default.createElement("div", { ...divProps, className: (0, classnames_1.default)(divProps.className), style: { ...divProps.style } },
        react_1.default.createElement("div", { className: "button", onClick: () => setShow(!show), style: { marginBottom: '5px' } }, show ? 'Hide Embed' : 'Show Embed'),
        react_1.default.createElement("div", null, show && divProps.children)));
};
exports.EmbedToggler = EmbedToggler;
