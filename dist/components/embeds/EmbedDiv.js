"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedDiv = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.EmbedDiv = styled_components_1.default.div `
  width: 100%;
  height: 100%;

  .rsme-d-none {
    display: none;
  }

  .twitter-tweet {
    margin: 0 !important;
  }

  blockquote {
    margin: 0 !important;
    padding: 0 !important;
  }
`;
