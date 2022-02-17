"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("../EmbedToggler");
const LinkedInPlaceholder_1 = require("../../components/placeholders/LinkedInPlaceholder");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Placeholders/LinkedInPlaceholder',
    component: LinkedInPlaceholder_1.LinkedInPlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(LinkedInPlaceholder_1.LinkedInPlaceholder, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
    style: {
        minWidth: 300,
        maxWidth: 550,
    },
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
    imageUrl: 'https://placekitten.com/540/300',
    style: {
        minWidth: 300,
        maxWidth: 550,
    },
};
