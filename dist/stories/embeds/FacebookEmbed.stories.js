"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width800 = exports.Width600 = exports.Width400 = exports.Width325 = exports.Width150 = exports.FluidWidth = exports.LinkPostExampleWidth550 = exports.VideoPostExample = exports.TextPostExample = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const FacebookEmbed_1 = require("../../components/embeds/FacebookEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
exports.default = {
    title: 'Embeds/FacebookEmbed',
    component: FacebookEmbed_1.FacebookEmbed,
};
const textUrl = 'https://www.facebook.com/andrewismusic/posts/483451443145971';
const photoUrl = 'https://www.facebook.com/andrewismusic/posts/451971596293956';
const linkUrl = 'https://www.facebook.com/andrewismusic/posts/479747760183006';
const videoUrl = 'https://fb.watch/bfP8U3LBa6/';
const placeholderImageUrl = `https://placekitten.com/325/560`;
const MainExampleTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(FacebookEmbed_1.FacebookEmbed, Object.assign({}, args)))));
const ToggledOffTemplate = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(FacebookEmbed_1.FacebookEmbed, Object.assign({}, args))));
exports.MainExample = MainExampleTemplate.bind({});
exports.MainExample.args = {
    url: photoUrl,
    width: 325,
};
exports.TextPostExample = ToggledOffTemplate.bind({});
exports.TextPostExample.args = {
    url: textUrl,
    width: 325,
};
exports.VideoPostExample = ToggledOffTemplate.bind({});
exports.VideoPostExample.args = {
    url: videoUrl,
    width: 325,
};
exports.LinkPostExampleWidth550 = ToggledOffTemplate.bind({});
exports.LinkPostExampleWidth550.args = {
    url: linkUrl,
    width: 550,
};
exports.FluidWidth = ToggledOffTemplate.bind({});
exports.FluidWidth.args = {
    url: photoUrl,
    style: { maxWidth: 550 },
    width: '100%',
};
exports.Width150 = ToggledOffTemplate.bind({});
exports.Width150.args = {
    url: photoUrl,
    width: 150,
};
exports.Width325 = ToggledOffTemplate.bind({});
exports.Width325.args = {
    url: photoUrl,
    width: 325,
};
exports.Width400 = ToggledOffTemplate.bind({});
exports.Width400.args = {
    url: photoUrl,
    width: 400,
};
exports.Width600 = ToggledOffTemplate.bind({});
exports.Width600.args = {
    url: photoUrl,
    width: 600,
};
exports.Width800 = ToggledOffTemplate.bind({});
exports.Width800.args = {
    url: photoUrl,
    width: 800,
};
exports.Width50Percent = ToggledOffTemplate.bind({});
exports.Width50Percent.args = {
    url: photoUrl,
    width: '50%',
};
exports.Width100Percent = ToggledOffTemplate.bind({});
exports.Width100Percent.args = {
    url: photoUrl,
    width: '100%',
};
exports.UrlOnly = ToggledOffTemplate.bind({});
exports.UrlOnly.args = {
    url: photoUrl,
};
exports.WithPlaceholderImage = ToggledOffTemplate.bind({});
exports.WithPlaceholderImage.args = {
    url: photoUrl,
    width: 325,
    placeholderImageUrl,
};
exports.CustomPlaceholder = ToggledOffTemplate.bind({});
exports.CustomPlaceholder.args = {
    url: photoUrl,
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
    url: photoUrl,
    width: 325,
    linkText: 'Custom link text',
};
exports.PlaceholderSpinnerDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderSpinnerDisabled.args = {
    url: photoUrl,
    width: 325,
    placeholderSpinnerDisabled: true,
};
exports.PlaceholderDisabled = ToggledOffTemplate.bind({});
exports.PlaceholderDisabled.args = {
    url: photoUrl,
    width: 325,
    placeholderDisabled: true,
};
