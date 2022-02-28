"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width150AtUnderMin = exports.Width800 = exports.Width600 = exports.Width400 = exports.Width328AtMin = exports.FluidWidth = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const InstagramEmbed_1 = require("../../components/embeds/InstagramEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/InstagramEmbed',
    component: InstagramEmbed_1.InstagramEmbed,
};
const url = 'https://www.instagram.com/p/CUbHfhpswxt/';
const placeholderImageUrl = `https://placekitten.com/540/400`;
const MainExampleTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(InstagramEmbed_1.InstagramEmbed, Object.assign({}, args)))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(InstagramEmbed_1.InstagramEmbed, Object.assign({}, args))));
exports.MainExample = MainExampleTemplate.bind({});
exports.MainExample.args = {
    url,
    width: 328,
};
exports.FluidWidth = ToggledOffTemplate.bind({});
exports.FluidWidth.args = {
    url,
    style: { maxWidth: 550 },
    width: '100%',
};
exports.Width328AtMin = ToggledOffTemplate.bind({});
exports.Width328AtMin.args = {
    url,
    width: 328,
};
exports.Width400 = ToggledOffTemplate.bind({});
exports.Width400.args = {
    url,
    width: 400,
};
exports.Width600 = ToggledOffTemplate.bind({});
exports.Width600.args = {
    url,
    width: 600,
};
exports.Width800 = ToggledOffTemplate.bind({});
exports.Width800.args = {
    url,
    width: 800,
};
exports.Width150AtUnderMin = ToggledOffTemplate.bind({});
exports.Width150AtUnderMin.args = {
    url,
    width: 150,
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
    width: 400,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url,
    width: 400,
    embedPlaceholder: (react_1.default.createElement("div", { style: {
            width: 328,
            padding: '150px 0',
            backgroundColor: 'lightsteelblue',
            textAlign: 'center',
        } }, "Custom Placeholder!")),
};
exports.CustomPlaceholderLinkText = ToggledOffTemplate.bind({});
exports.CustomPlaceholderLinkText.args = {
    url,
    width: 400,
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
    width: 400,
    placeholderDisabled: true,
};
