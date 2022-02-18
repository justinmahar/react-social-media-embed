"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width800 = exports.Width600 = exports.Width400 = exports.Width325 = exports.Width150 = exports.FluidWidth = exports.Example = void 0;
const react_1 = __importDefault(require("react"));
const FacebookEmbed_1 = require("../../components/embeds/FacebookEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/FacebookEmbed',
    component: FacebookEmbed_1.FacebookEmbed,
};
const url = 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661';
const videoUrl = 'https://fb.watch/b67iYbdzNm/';
const placeholderImageUrl = `https://placekitten.com/325/560`;
const ToggledOnTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement(FacebookEmbed_1.FacebookEmbed, Object.assign({}, args))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(FacebookEmbed_1.FacebookEmbed, Object.assign({}, args))));
exports.Example = ToggledOnTemplate.bind({});
exports.Example.args = {
    url,
    width: 325,
};
exports.FluidWidth = ToggledOffTemplate.bind({});
exports.FluidWidth.args = {
    url,
    style: { maxWidth: 550 },
    width: '100%',
};
exports.Width150 = ToggledOffTemplate.bind({});
exports.Width150.args = {
    url,
    width: 150,
};
exports.Width325 = ToggledOffTemplate.bind({});
exports.Width325.args = {
    url,
    width: 325,
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
    width: 325,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url,
    width: 325,
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
    width: 325,
    linkText: 'Custom link text',
};
exports.PlaceholderDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderDisabled.args = {
    url,
    width: 325,
    placeholderDisabled: true,
};
