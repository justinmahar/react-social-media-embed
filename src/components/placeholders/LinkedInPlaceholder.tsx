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

export interface LinkedInPlaceholderProps extends DivProps {
  url: string;
  linkText?: string;
  imageUrl?: string;
}

export const LinkedInPlaceholder = ({
  url,
  linkText = 'View this post on LinkedIn',
  imageUrl,
  ...divProps
}: LinkedInPlaceholderProps) => {
  return (
    <div
      {...divProps}
      className={classNames(divProps.className)}
      style={{
        overflow: 'hidden',
        border: 'solid 1px rgba(0, 0, 0, 0.15)',
        borderRadius: 8,
        boxSizing: 'border-box',
        ...divProps.style,
      }}
    >
      <a href={url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        {!imageUrl && (
          <>
            <PlaceholderHeader style={{ paddingTop: 16, paddingBottom: 16 }}>
              <ProfilePlaceholder />
            </PlaceholderHeader>
            <CaptionPlaceholder
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                marginBottom: 14,
              }}
            />
          </>
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <EngagementIconsPlaceholder />
            </div>
          </div>
        </PlaceholderFooter>
      </a>
    </div>
  );
};
