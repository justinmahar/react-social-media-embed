"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Size150x570AtUnderMin = exports.Size600x650 = exports.Size400x570 = exports.Size250x570AtMinWidth = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const LinkedInEmbed_1 = require("../../components/embeds/LinkedInEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/LinkedInEmbed',
    component: LinkedInEmbed_1.LinkedInEmbed,
};
const url = 'https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384';
const postUrl = 'https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7';
const placeholderImageUrl = `https://placekitten.com/504/325`;
const MainExampleTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(LinkedInEmbed_1.LinkedInEmbed, Object.assign({}, args)))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(LinkedInEmbed_1.LinkedInEmbed, Object.assign({}, args))));
exports.MainExample = MainExampleTemplate.bind({});
exports.MainExample.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
};
exports.Size250x570AtMinWidth = ToggledOffTemplate.bind({});
exports.Size250x570AtMinWidth.args = {
    url,
    postUrl,
    width: 250,
    height: 570,
};
exports.Size400x570 = ToggledOffTemplate.bind({});
exports.Size400x570.args = {
    url,
    postUrl,
    width: 400,
    height: 570,
};
exports.Size600x650 = ToggledOffTemplate.bind({});
exports.Size600x650.args = {
    url,
    postUrl,
    width: 600,
    height: 650,
};
exports.Size150x570AtUnderMin = ToggledOffTemplate.bind({});
exports.Size150x570AtUnderMin.args = {
    url,
    postUrl,
    width: 150,
    height: 570,
};
exports.Width100Percent = ToggledOffTemplate.bind({});
exports.Width100Percent.args = {
    url,
    postUrl,
    width: '100%',
    height: 570,
};
exports.UrlOnly = ToggledOffTemplate.bind({});
exports.UrlOnly.args = {
    url,
    postUrl,
};
exports.WithPlaceholderImage = ToggledOffTemplate.bind({});
exports.WithPlaceholderImage.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
    embedPlaceholder: (react_1.default.createElement("div", { style: {
            width: 325,
            padding: '150px 0',
            backgroundColor: 'lightsteelblue',
            textAlign: 'center',
        } }, "Custom Placeholder!")),
};
exports.CustomPlaceholderLinkText = ToggledOffTemplate.bind({});
exports.CustomPlaceholderLinkText.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
    linkText: 'Custom link text',
};
exports.PlaceholderSpinnerDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderSpinnerDisabled.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderSpinnerDisabled: true,
};
exports.PlaceholderDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderDisabled.args = {
    url,
    postUrl,
    width: 325,
    height: 570,
    placeholderDisabled: true,
};
