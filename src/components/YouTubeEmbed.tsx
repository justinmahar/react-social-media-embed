import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export interface YouTubeEmbedProps extends DivPropsWithoutRef {
  url: string;
}

export const YouTubeEmbed = ({ url, ...divProps }: YouTubeEmbedProps) => {
  let ytVideoId = '00000000';
  const match = url.match(/[?&]v=(.+?)(?:$|[&])/);
  if (match) {
    ytVideoId = match[1];
  }

  console.log('ytVideoId', ytVideoId);
  return (
    <YTDiv {...divProps} style={{ maxWidth: 550, width: '100%', ...divProps.style }}>
      <YouTube
        className="yt-div"
        videoId={ytVideoId}
        opts={{
          playerVars: { autoplay: 0, controls: 0, modestbranding: 1 },
        }}
        // onPlay={handleVideoPlay}
      />
    </YTDiv>
  );
};

const YTDiv = styled.div`
  border-radius: 5px;
  iframe {
    width: 100% !important;
  }
`;
