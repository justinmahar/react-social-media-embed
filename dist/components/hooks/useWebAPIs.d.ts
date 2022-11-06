/**
 * Specifies the [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) to use.
 */
export interface WebAPIs {
    window?: Window;
    document?: Document;
}
/**
 * Use the provided web APIs, or fall back on default ones, if available.
 * This hook will check if the APIs exist and is useful in preventing SSR issues
 * with `window` and `document` not being defined.
 *
 * @param webAPIs The custom APIs to use, if any.
 * @returns A WebAPIs object.
 */
export declare const useWebAPIs: (webAPIs?: WebAPIs | undefined) => WebAPIs;
