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

export interface FacebookPlaceholderProps extends DivProps {
  url: string;
  linkText?: string;
  imageUrl?: string;
}

export const FacebookPlaceholder = ({
  url,
  linkText = 'View this post on Facebook',
  imageUrl,
  ...divProps
}: FacebookPlaceholderProps) => {
  return (
    <div
      {...divProps}
      className={classNames(divProps.className)}
      style={{
        overflow: 'hidden',
        background: '#FFF',
        border: '1px solid #dee2e6',
        borderRadius: 3,
        boxSizing: 'border-box',
        ...divProps.style,
      }}
    >
      <a href={url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        {!imageUrl && (
          <PlaceholderHeader style={{ paddingTop: 16, paddingBottom: 16 }}>
            <ProfilePlaceholder />
          </PlaceholderHeader>
        )}
        {!imageUrl && (
          <PlaceholderTextBody
            style={{
              height: 220,
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
          <div style={{ paddingLeft: 16, paddingRight: 16 }}>
            <CaptionPlaceholder style={{ marginBottom: 14 }} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <EngagementIconsPlaceholder />
            </div>
          </div>
        </PlaceholderFooter>
      </a>
    </div>
  );
};
