"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width150AtUnderMin = exports.Width800AtOverMax = exports.Width480AtMax = exports.Width400 = exports.Width325AtMin = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const TikTokEmbed_1 = require("../../components/embeds/TikTokEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/TikTokEmbed',
    component: TikTokEmbed_1.TikTokEmbed,
};
const url = 'https://www.tiktok.com/@epicgardening/video/7055411162212633903';
const placeholderImageUrl = `https://placekitten.com/325/560`;
const MainExampleTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(TikTokEmbed_1.TikTokEmbed, Object.assign({}, args)))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(TikTokEmbed_1.TikTokEmbed, Object.assign({}, args))));
exports.MainExample = MainExampleTemplate.bind({});
exports.MainExample.args = {
    url,
    width: 325,
};
exports.Width325AtMin = ToggledOffTemplate.bind({});
exports.Width325AtMin.args = {
    url,
    width: 325,
};
exports.Width400 = ToggledOffTemplate.bind({});
exports.Width400.args = {
    url,
    width: 400,
};
exports.Width480AtMax = ToggledOffTemplate.bind({});
exports.Width480AtMax.args = {
    url,
    width: 480,
};
exports.Width800AtOverMax = ToggledOffTemplate.bind({});
exports.Width800AtOverMax.args = {
    url,
    width: 800,
};
exports.Width150AtUnderMin = ToggledOffTemplate.bind({});
exports.Width150AtUnderMin.args = {
    url,
    width: 150,
};
exports.Width100Percent = ToggledOffTemplate.bind({});
exports.Width100Percent.args = {
    url,
    width: '100%',
};
exports.UrlOnly = ToggledOffTemplate.bind({});
exports.UrlOnly.args = {
    url,
};
exports.WithPlaceholderImage = ToggledOffTemplate.bind({});
exports.WithPlaceholderImage.args = {
    url,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url,
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
    linkText: 'Custom link text',
};
exports.PlaceholderSpinnerDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderSpinnerDisabled.args = {
    url,
    width: 400,
    placeholderSpinnerDisabled: true,
};
exports.PlaceholderDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderDisabled.args = {
    url,
    placeholderDisabled: true,
};
