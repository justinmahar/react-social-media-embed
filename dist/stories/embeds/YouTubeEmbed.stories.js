"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width800 = exports.Width400 = exports.Width200 = exports.Width100 = exports.Size600x400 = exports.Size400x600 = exports.Size400x200 = exports.Size200x400 = exports.Size200x200 = exports.Size200x100 = exports.Size100x200 = exports.Size100x100 = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const YouTubeEmbed_1 = require("../../components/embeds/YouTubeEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/YouTubeEmbed',
    component: YouTubeEmbed_1.YouTubeEmbed,
};
const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const placeholderImageUrl = `https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=${Date.now()}`;
const MainExampleTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(YouTubeEmbed_1.YouTubeEmbed, Object.assign({}, args)))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(YouTubeEmbed_1.YouTubeEmbed, Object.assign({}, args))));
exports.MainExample = MainExampleTemplate.bind({});
exports.MainExample.args = {
    url,
    placeholderImageUrl,
    width: 325,
    height: 220,
};
exports.Size100x100 = ToggledOffTemplate.bind({});
exports.Size100x100.args = {
    url,
    width: 100,
    height: 100,
};
exports.Size100x200 = ToggledOffTemplate.bind({});
exports.Size100x200.args = {
    url,
    width: 100,
    height: 200,
};
exports.Size200x100 = ToggledOffTemplate.bind({});
exports.Size200x100.args = {
    url,
    width: 200,
    height: 100,
};
exports.Size200x200 = ToggledOffTemplate.bind({});
exports.Size200x200.args = {
    url,
    width: 200,
    height: 200,
};
exports.Size200x400 = ToggledOffTemplate.bind({});
exports.Size200x400.args = {
    url,
    width: 200,
    height: 400,
};
exports.Size400x200 = ToggledOffTemplate.bind({});
exports.Size400x200.args = {
    url,
    width: 400,
    height: 200,
};
exports.Size400x600 = ToggledOffTemplate.bind({});
exports.Size400x600.args = {
    url,
    width: 400,
    height: 600,
};
exports.Size600x400 = ToggledOffTemplate.bind({});
exports.Size600x400.args = {
    url,
    width: 600,
    height: 400,
};
exports.Width100 = ToggledOffTemplate.bind({});
exports.Width100.args = {
    url,
    width: 100,
};
exports.Width200 = ToggledOffTemplate.bind({});
exports.Width200.args = {
    url,
    width: 200,
};
exports.Width400 = ToggledOffTemplate.bind({});
exports.Width400.args = {
    url,
    width: 400,
};
exports.Width800 = ToggledOffTemplate.bind({});
exports.Width800.args = {
    url,
    width: 800,
};
exports.Width50Percent = ToggledOffTemplate.bind({});
exports.Width50Percent.args = {
    url,
    width: '50%',
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
