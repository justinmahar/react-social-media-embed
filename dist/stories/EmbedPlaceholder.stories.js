"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedPlaceholder_1 = require("../components/EmbedPlaceholder");
const EmbedToggler_1 = require("./EmbedToggler");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Components/EmbedPlaceholder',
    component: EmbedPlaceholder_1.EmbedPlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(EmbedPlaceholder_1.EmbedPlaceholder, { ...args })));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.instagram.com/p/CUbHfhpswxt/',
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://www.instagram.com/p/CUbHfhpswxt/',
    image: 'https://placekitten.com/540/540',
};
