"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebAPIs = void 0;
const react_1 = __importDefault(require("react"));
/**
 * Use the provided web APIs, or fall back on default ones, if available.
 * This hook will check if the APIs exist and is useful in preventing SSR issues
 * with `window` and `document` not being defined.
 *
 * @param webAPIs The custom APIs to use, if any.
 * @returns A WebAPIs object.
 */
const useWebAPIs = (webAPIs) => {
    return react_1.default.useMemo(() => {
        var _a, _b;
        const apis = {};
        apis.document = (_a = webAPIs === null || webAPIs === void 0 ? void 0 : webAPIs.document) !== null && _a !== void 0 ? _a : (typeof document !== 'undefined' ? document : undefined);
        apis.window = (_b = webAPIs === null || webAPIs === void 0 ? void 0 : webAPIs.window) !== null && _b !== void 0 ? _b : (typeof window !== 'undefined' ? window : undefined);
        return apis;
    }, [webAPIs]);
};
exports.useWebAPIs = useWebAPIs;
