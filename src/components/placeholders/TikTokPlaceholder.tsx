import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { CaptionPlaceholder } from './parts/CaptionPlaceholder';
import { EngagementIconsPlaceholder } from './parts/EngagementIconsPlaceholder';
import { FooterLinkText } from './parts/FooterLinkText';
import { PlaceholderFooter } from './parts/FooterPlaceholder';
import { HeaderLinkText } from './parts/HeaderLinkText';
import { PlaceholderHeader } from './parts/PlaceholderHeader';
import { PlaceholderImageBody } from './parts/PlaceholderImageBody';
import { PlaceholderTextBody } from './parts/PlaceholderTextBody';
import { ProfilePlaceholder } from './parts/ProfilePlaceholder';
import { Spinner } from './parts/Spinner';

export interface TikTokPlaceholderProps extends DivProps {
  url: string;
  linkText?: string;
  imageUrl?: string;
}

export const TikTokPlaceholder = ({
  url,
  linkText = 'View this post on TikTok',
  imageUrl,
  ...divProps
}: TikTokPlaceholderProps) => {
  return (
    <div
      {...divProps}
      className={classNames(divProps.className)}
      style={{
        overflow: 'hidden',
        border: 'solid 1px rgba(22,24,35,0.12)',
        borderRadius: 8,
        boxSizing: 'border-box',
        ...divProps.style,
      }}
    >
      <a href={url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        {!imageUrl && (
          <PlaceholderTextBody
            style={{
              height: 420,
            }}
          >
            <Spinner size={30} />
            {!!linkText && <HeaderLinkText>{linkText}</HeaderLinkText>}
          </PlaceholderTextBody>
        )}
        {imageUrl && <PlaceholderImageBody imageUrl={imageUrl} />}
        <PlaceholderFooter style={{ paddingBottom: 16 }}>
          {imageUrl && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: 16 }}>
              <FooterLinkText>{linkText}</FooterLinkText>
              <Spinner />
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginRight: 16 }}>
            <CaptionPlaceholder
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                marginBottom: 14,
              }}
            />
            <EngagementIconsPlaceholder />
          </div>
        </PlaceholderFooter>
      </a>
    </div>
  );
};
