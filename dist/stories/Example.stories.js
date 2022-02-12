"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.Hello = void 0;
const react_1 = __importDefault(require("react"));
const Example_1 = require("../components/Example");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Components/Example',
    component: Example_1.Example,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => react_1.default.createElement(Example_1.Example, { ...args });
exports.Hello = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Hello.args = {
    label: 'Hello',
};
exports.World = Template.bind({});
exports.World.args = {
    label: 'World',
};
