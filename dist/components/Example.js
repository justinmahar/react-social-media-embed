"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const react_1 = __importDefault(require("react"));
/**
 * This is the description for the Example component
 */
const Example = ({ backgroundColor, label, ...props }) => {
    return (react_1.default.createElement("div", { ...props, style: { backgroundColor, ...props.style } }, label));
};
exports.Example = Example;
