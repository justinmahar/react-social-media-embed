"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("../EmbedToggler");
const YouTubePlaceholder_1 = require("../../components/placeholders/YouTubePlaceholder");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Placeholders/YouTubePlaceholder',
    component: YouTubePlaceholder_1.YouTubePlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(YouTubePlaceholder_1.YouTubePlaceholder, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.youtube.com/watch?v=d-qqom30TZA',
    style: {
        width: 640,
    },
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://www.youtube.com/watch?v=d-qqom30TZA',
    imageUrl: 'https://placekitten.com/640/360',
    style: {
        width: 640,
    },
};
