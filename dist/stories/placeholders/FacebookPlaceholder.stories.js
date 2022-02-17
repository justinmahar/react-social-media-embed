"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImage = exports.UrlOnly = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("../EmbedToggler");
const FacebookPlaceholder_1 = require("../../components/placeholders/FacebookPlaceholder");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Placeholders/FacebookPlaceholder',
    component: FacebookPlaceholder_1.FacebookPlaceholder,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, null,
    react_1.default.createElement(FacebookPlaceholder_1.FacebookPlaceholder, Object.assign({}, args))));
exports.UrlOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.UrlOnly.args = {
    url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
    style: {
        maxWidth: 550,
    },
};
exports.WithImage = Template.bind({});
exports.WithImage.args = {
    url: 'https://www.facebook.com/photo/?fbid=451970492960733&set=a.234241234733661',
    imageUrl: 'https://placekitten.com/540/340',
    style: {
        maxWidth: 550,
    },
};
