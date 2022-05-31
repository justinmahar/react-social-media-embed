"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWithCustomSpinner = exports.TextWithCustomSpinner = exports.ImageWithSpinnerDisabled = exports.TextWithSpinnerDisabled = exports.PortraitImageNoSizing = exports.PortraitImageHeight800 = exports.PortraitImageHeight400 = exports.PortraitImageHeight200 = exports.PortraitImageHeight100 = exports.PortraitImageWidth800 = exports.PortraitImageWidth400 = exports.PortraitImageWidth200 = exports.PortraitImageWidth100 = exports.PortraitImageWidthHeight400x600 = exports.PortraitImageWidthHeight600x400 = exports.PortraitImageWidthHeight200x400 = exports.PortraitImageWidthHeight400x200 = exports.PortraitImageWidthHeight200x200 = exports.PortraitImageWidthHeight100x100 = exports.LandscapeImageNoSizing = exports.LandscapeImageHeight800 = exports.LandscapeImageHeight400 = exports.LandscapeImageHeight200 = exports.LandscapeImageHeight100 = exports.LandscapeImageWidth800 = exports.LandscapeImageWidth400 = exports.LandscapeImageWidth200 = exports.LandscapeImageWidth100 = exports.LandscapeImageWidthHeight400x600 = exports.LandscapeImageWidthHeight600x400 = exports.LandscapeImageWidthHeight200x400 = exports.LandscapeImageWidthHeight400x200 = exports.LandscapeImageWidthHeight200x200 = exports.LandscapeImageWidthHeight100x100 = exports.TextNoSizing = exports.TextHeight800 = exports.TextHeight400 = exports.TextHeight200 = exports.TextHeight100 = exports.TextWidth800 = exports.TextWidth400 = exports.TextWidth200 = exports.TextWidth100 = exports.TextWidthHeight400x600 = exports.TextWidthHeight600x400 = exports.TextWidthHeight200x400 = exports.TextWidthHeight400x200 = exports.TextWidthHeight200x200 = exports.TextWidthHeight100x100 = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const PlaceholderEmbed_1 = require("../../components/placeholder/PlaceholderEmbed");
const EmbedToggler_1 = require("../EmbedToggler");
const ClipLoader_1 = __importDefault(require("react-spinners/ClipLoader"));
const ScaleLoader_1 = __importDefault(require("react-spinners/ScaleLoader"));
exports.default = {
    title: 'Placeholder/PlaceholderEmbed',
    component: PlaceholderEmbed_1.PlaceholderEmbed,
};
const Template = (args) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement(PlaceholderEmbed_1.PlaceholderEmbed, Object.assign({}, args))));
const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const landscapeImageUrl = 'https://placekitten.com/550/325';
const portraitImageUrl = 'https://placekitten.com/325/550';
exports.MainExample = Template.bind({});
exports.MainExample.args = {
    url,
    linkText: 'View post on Splosher',
    style: {
        width: 400,
        height: 320,
    },
};
exports.TextWidthHeight100x100 = Template.bind({});
exports.TextWidthHeight100x100.args = {
    url,
    style: {
        width: 100,
        height: 100,
    },
};
exports.TextWidthHeight200x200 = Template.bind({});
exports.TextWidthHeight200x200.args = {
    url,
    style: {
        width: 200,
        height: 200,
    },
};
exports.TextWidthHeight400x200 = Template.bind({});
exports.TextWidthHeight400x200.args = {
    url,
    style: {
        width: 400,
        height: 200,
    },
};
exports.TextWidthHeight200x400 = Template.bind({});
exports.TextWidthHeight200x400.args = {
    url,
    style: {
        width: 200,
        height: 400,
    },
};
exports.TextWidthHeight600x400 = Template.bind({});
exports.TextWidthHeight600x400.args = {
    url,
    style: {
        width: 600,
        height: 400,
    },
};
exports.TextWidthHeight400x600 = Template.bind({});
exports.TextWidthHeight400x600.args = {
    url,
    style: {
        width: 400,
        height: 600,
    },
};
exports.TextWidth100 = Template.bind({});
exports.TextWidth100.args = {
    url,
    style: {
        width: 100,
    },
};
exports.TextWidth200 = Template.bind({});
exports.TextWidth200.args = {
    url,
    style: {
        width: 200,
    },
};
exports.TextWidth400 = Template.bind({});
exports.TextWidth400.args = {
    url,
    style: {
        width: 400,
    },
};
exports.TextWidth800 = Template.bind({});
exports.TextWidth800.args = {
    url,
    style: {
        width: 800,
    },
};
exports.TextHeight100 = Template.bind({});
exports.TextHeight100.args = {
    url,
    style: {
        height: 100,
    },
};
exports.TextHeight200 = Template.bind({});
exports.TextHeight200.args = {
    url,
    style: {
        height: 200,
    },
};
exports.TextHeight400 = Template.bind({});
exports.TextHeight400.args = {
    url,
    style: {
        height: 400,
    },
};
exports.TextHeight800 = Template.bind({});
exports.TextHeight800.args = {
    url,
    style: {
        height: 800,
    },
};
exports.TextNoSizing = Template.bind({});
exports.TextNoSizing.args = {
    url,
};
exports.LandscapeImageWidthHeight100x100 = Template.bind({});
exports.LandscapeImageWidthHeight100x100.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 100,
        height: 100,
    },
};
exports.LandscapeImageWidthHeight200x200 = Template.bind({});
exports.LandscapeImageWidthHeight200x200.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 200,
        height: 200,
    },
};
exports.LandscapeImageWidthHeight400x200 = Template.bind({});
exports.LandscapeImageWidthHeight400x200.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 400,
        height: 200,
    },
};
exports.LandscapeImageWidthHeight200x400 = Template.bind({});
exports.LandscapeImageWidthHeight200x400.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 200,
        height: 400,
    },
};
exports.LandscapeImageWidthHeight600x400 = Template.bind({});
exports.LandscapeImageWidthHeight600x400.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 600,
        height: 400,
    },
};
exports.LandscapeImageWidthHeight400x600 = Template.bind({});
exports.LandscapeImageWidthHeight400x600.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 400,
        height: 600,
    },
};
exports.LandscapeImageWidth100 = Template.bind({});
exports.LandscapeImageWidth100.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 100,
    },
};
exports.LandscapeImageWidth200 = Template.bind({});
exports.LandscapeImageWidth200.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 200,
    },
};
exports.LandscapeImageWidth400 = Template.bind({});
exports.LandscapeImageWidth400.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 400,
    },
};
exports.LandscapeImageWidth800 = Template.bind({});
exports.LandscapeImageWidth800.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        width: 800,
    },
};
exports.LandscapeImageHeight100 = Template.bind({});
exports.LandscapeImageHeight100.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        height: 100,
    },
};
exports.LandscapeImageHeight200 = Template.bind({});
exports.LandscapeImageHeight200.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        height: 200,
    },
};
exports.LandscapeImageHeight400 = Template.bind({});
exports.LandscapeImageHeight400.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        height: 400,
    },
};
exports.LandscapeImageHeight800 = Template.bind({});
exports.LandscapeImageHeight800.args = {
    url,
    imageUrl: landscapeImageUrl,
    style: {
        height: 800,
    },
};
exports.LandscapeImageNoSizing = Template.bind({});
exports.LandscapeImageNoSizing.args = {
    url,
    imageUrl: landscapeImageUrl,
};
exports.PortraitImageWidthHeight100x100 = Template.bind({});
exports.PortraitImageWidthHeight100x100.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 100,
        height: 100,
    },
};
exports.PortraitImageWidthHeight200x200 = Template.bind({});
exports.PortraitImageWidthHeight200x200.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 200,
        height: 200,
    },
};
exports.PortraitImageWidthHeight400x200 = Template.bind({});
exports.PortraitImageWidthHeight400x200.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 400,
        height: 200,
    },
};
exports.PortraitImageWidthHeight200x400 = Template.bind({});
exports.PortraitImageWidthHeight200x400.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 200,
        height: 400,
    },
};
exports.PortraitImageWidthHeight600x400 = Template.bind({});
exports.PortraitImageWidthHeight600x400.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 600,
        height: 400,
    },
};
exports.PortraitImageWidthHeight400x600 = Template.bind({});
exports.PortraitImageWidthHeight400x600.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 400,
        height: 600,
    },
};
exports.PortraitImageWidth100 = Template.bind({});
exports.PortraitImageWidth100.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 100,
    },
};
exports.PortraitImageWidth200 = Template.bind({});
exports.PortraitImageWidth200.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 200,
    },
};
exports.PortraitImageWidth400 = Template.bind({});
exports.PortraitImageWidth400.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 400,
    },
};
exports.PortraitImageWidth800 = Template.bind({});
exports.PortraitImageWidth800.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        width: 800,
    },
};
exports.PortraitImageHeight100 = Template.bind({});
exports.PortraitImageHeight100.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        height: 100,
    },
};
exports.PortraitImageHeight200 = Template.bind({});
exports.PortraitImageHeight200.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        height: 200,
    },
};
exports.PortraitImageHeight400 = Template.bind({});
exports.PortraitImageHeight400.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        height: 400,
    },
};
exports.PortraitImageHeight800 = Template.bind({});
exports.PortraitImageHeight800.args = {
    url,
    imageUrl: portraitImageUrl,
    style: {
        height: 800,
    },
};
exports.PortraitImageNoSizing = Template.bind({});
exports.PortraitImageNoSizing.args = {
    url,
    imageUrl: portraitImageUrl,
};
exports.TextWithSpinnerDisabled = Template.bind({});
exports.TextWithSpinnerDisabled.args = {
    url,
    spinnerDisabled: true,
    style: {
        width: 400,
        height: 300,
    },
};
exports.ImageWithSpinnerDisabled = Template.bind({});
exports.ImageWithSpinnerDisabled.args = {
    url,
    imageUrl: landscapeImageUrl,
    spinnerDisabled: true,
    style: {
        width: 400,
    },
};
exports.TextWithCustomSpinner = Template.bind({});
exports.TextWithCustomSpinner.args = {
    url,
    spinner: react_1.default.createElement(ClipLoader_1.default, { color: "black", size: 15 }),
    style: {
        width: 400,
        height: 300,
    },
};
exports.ImageWithCustomSpinner = Template.bind({});
exports.ImageWithCustomSpinner.args = {
    url,
    imageUrl: landscapeImageUrl,
    spinner: react_1.default.createElement(ScaleLoader_1.default, { color: "black", height: 10, width: 2 }),
    style: {
        width: 400,
    },
};
