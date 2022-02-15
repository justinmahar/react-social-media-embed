"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const LinkedInEmbed_1 = require("../../components/embeds/LinkedInEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Embeds/LinkedInEmbed',
    component: LinkedInEmbed_1.LinkedInEmbed,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(LinkedInEmbed_1.LinkedInEmbed, { ...args })));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:6892528764350185473',
    postUrl: 'https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb',
    height: 592,
};
