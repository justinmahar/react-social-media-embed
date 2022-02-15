"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlOnlyVideo = exports.UrlOnlyPost = void 0;
const react_1 = __importDefault(require("react"));
const FacebookEmbed_1 = require("../../components/embeds/FacebookEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Embeds/FacebookEmbed',
    component: FacebookEmbed_1.FacebookEmbed,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(FacebookEmbed_1.FacebookEmbed, { ...args })));
exports.UrlOnlyPost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnlyPost.args = {
    url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
};
exports.UrlOnlyVideo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnlyVideo.args = {
    url: 'https://fb.watch/b67iYbdzNm/',
};
