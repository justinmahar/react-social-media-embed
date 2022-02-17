"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const YouTubeEmbed_1 = require("../../components/embeds/YouTubeEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Embeds/YouTubeEmbed',
    component: YouTubeEmbed_1.YouTubeEmbed,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(YouTubeEmbed_1.YouTubeEmbed, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.youtube.com/watch?v=d-qqom30TZA',
};
