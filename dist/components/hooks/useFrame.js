"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFrame = void 0;
const react_1 = __importDefault(require("react"));
/**
 * Use the provided Frame, or fall back on the default one (if available) if none is provided.
 *
 * This hook is useful in preventing SSR issues when `window` and `document`
 * aren't defined.
 *
 * @param frame The Frame to use, if any.
 * @returns A Frame object containing references to `window` and `document`.
 */
const useFrame = (frame) => {
    return react_1.default.useMemo(() => {
        if (frame) {
            return frame;
        }
        return {
            document: typeof document !== 'undefined' ? document : undefined,
            window: typeof window !== 'undefined' ? window : undefined,
        };
    }, [frame]);
};
exports.useFrame = useFrame;
