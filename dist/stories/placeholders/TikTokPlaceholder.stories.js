"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("../EmbedToggler");
const TikTokPlaceholder_1 = require("../../components/placeholders/TikTokPlaceholder");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Placeholders/TikTokPlaceholder',
    component: TikTokPlaceholder_1.TikTokPlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(TikTokPlaceholder_1.TikTokPlaceholder, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1',
    style: {
        width: 325,
        minWidth: 325,
        maxWidth: 480,
    },
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1',
    imageUrl: 'https://placekitten.com/325/540',
    style: {
        width: 325,
        minWidth: 325,
        maxWidth: 480,
    },
};
