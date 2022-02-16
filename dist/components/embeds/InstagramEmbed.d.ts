import { DivProps } from 'react-html-props';
export interface InstagramEmbedProps extends DivProps {
    url: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
}
export declare const InstagramEmbed: ({ url, igVersion, linkText, processDelay, scriptLoadDisabled, retryDisabled, retryInitialDelay, retryBackoffMaxDelay, ...divProps }: InstagramEmbedProps) => JSX.Element;
