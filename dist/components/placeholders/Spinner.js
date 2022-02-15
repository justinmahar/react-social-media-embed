"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const uuid_1 = require("../uuid");
const Spinner = ({ size = 20, ...divProps }) => {
    const uuidRef = react_1.default.useRef((0, uuid_1.generateUUID)());
    const className = `rsme-spinner-${uuidRef.current}`;
    const borderSize = Math.max(Math.round(0.3 * size), 1);
    const sideLength = Math.max(size - borderSize * 2, 1);
    const style = (react_1.default.createElement("style", null, `
        .${className} {
          border: ${borderSize}px solid rgba(0, 0, 0, 0.1);
          border-top: ${borderSize}px solid ${divProps.style?.color ?? '#000000'};
          border-radius: 50%;
          width: ${sideLength}px;
          height: ${sideLength}px;
          animation: ${className}-spin 1s linear infinite;
        }

        @keyframes ${className}-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        style,
        react_1.default.createElement("div", { ...divProps, className: (0, classnames_1.default)('rsme-spinner', className, divProps.className), style: { ...divProps.style } }, divProps.children)));
};
exports.Spinner = Spinner;
