import classNames from 'classnames';
import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import styled from 'styled-components';
import { EmbedPlaceholder } from './EmbedPlaceholder';

export interface TwitterEmbedProps extends DivPropsWithoutRef {
  url: string;
}

export const TwitterEmbed = ({ url, ...divProps }: TwitterEmbedProps) => {
  const tweetId = url.substring(url.lastIndexOf('/') + 1).replace(/[?].*$/, '');
  return (
    <div {...divProps} className={classNames(divProps.className)} style={{ ...divProps.style }}>
      <TwitterDiv
        {...divProps}
        className={classNames('twitter-embed-container', divProps.className)}
        style={{ minWidth: 250, maxWidth: 550, ...divProps.style }}
      >
        <TwitterTweetEmbed tweetId={tweetId} placeholder={<EmbedPlaceholder url={url} style={{ width: '100%' }} />} />
      </TwitterDiv>
    </div>
  );
};

const TwitterDiv = styled.div`
  width: 100%;
  .twitter-tweet iframe {
    width: 100% !important;
  }
`;
