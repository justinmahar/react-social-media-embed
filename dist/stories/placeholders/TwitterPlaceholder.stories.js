"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("../EmbedToggler");
const TwitterPlaceholder_1 = require("../../components/placeholders/TwitterPlaceholder");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Placeholders/TwitterPlaceholder',
    component: TwitterPlaceholder_1.TwitterPlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(TwitterPlaceholder_1.TwitterPlaceholder, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://twitter.com/PixelAndBracket/status/1356633038717923333',
    style: {
        minWidth: 250,
        maxWidth: 550,
    },
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://twitter.com/PixelAndBracket/status/1356633038717923333',
    imageUrl: 'https://placekitten.com/550/350',
    style: {
        minWidth: 250,
        maxWidth: 550,
    },
};
