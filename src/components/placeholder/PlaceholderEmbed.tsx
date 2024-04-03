import classNames from 'classnames';
import React from 'react';
import { DivProps } from 'react-html-props';
import { EmbedStyle } from '../embeds/EmbedStyle';
import { BorderSpinner } from './parts/BorderSpinner';
import { EngagementIconsPlaceholder } from './parts/EngagementIconsPlaceholder';
import { ProfilePlaceholder } from './parts/ProfilePlaceholder';

// See: https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1
const isJavaScriptProtocol =
  /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;

export interface PlaceholderEmbedProps extends DivProps {
  url: string;
  linkText?: string;
  imageUrl?: string;
  spinner?: React.ReactNode;
  spinnerDisabled?: boolean;
  allowJavaScriptUrls?: boolean;
}

export const PlaceholderEmbed = ({
  url,
  linkText = 'View post',
  imageUrl,
  spinner = <BorderSpinner />,
  allowJavaScriptUrls = true,
  spinnerDisabled,
  ...divProps
}: PlaceholderEmbedProps) => {
  if (isJavaScriptProtocol.test(url) && !allowJavaScriptUrls) {
    console.warn(`PlaceholderEmbed has blocked a javascript: URL as a security precaution`);
    return null;
  }

  return (
    <div
      {...divProps}
      className={classNames(divProps.className)}
      style={{
        overflow: 'hidden',
        border: '1px solid #dee2e6',
        backgroundColor: '#ffffff',
        borderRadius: 0,
        boxSizing: 'border-box',
        position: 'relative',
        ...divProps.style,
      }}
    >
      <EmbedStyle />
      <a href={url} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        {!imageUrl && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              paddingBottom: 16,
              zIndex: 2,
              backgroundColor: '#ffffff',
            }}
          >
            <ProfilePlaceholder />
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: imageUrl ? 'start' : 'center',
            height: '100%',
            width: '100%',
          }}
        >
          {!imageUrl && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                rowGap: 16,
                zIndex: 3,
                padding: 8,
                backgroundColor: '#ffffff',
              }}
            >
              {!spinnerDisabled && spinner}
              {!!linkText && (
                <div
                  style={{
                    color: '#000000',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 550,
                    lineHeight: '18px',
                    textAlign: 'center',
                  }}
                >
                  {linkText}
                </div>
              )}
            </div>
          )}
          {imageUrl &&
            (typeof divProps.style?.height !== 'undefined' ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: `url("${imageUrl}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: '40',
                }}
              />
            ) : (
              <div style={{ width: '100%', marginBottom: 40 }}>
                <img src={imageUrl} style={{ width: '100%' }} />
              </div>
            ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 40,
            width: '100%',
            backgroundColor: '#ffffff',
            zIndex: 1,
          }}
        >
          {!imageUrl && (
            <EngagementIconsPlaceholder
              style={{
                marginLeft: 16,
              }}
            />
          )}
          {imageUrl && (
            <div
              style={{
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                columnGap: 16,
              }}
            >
              <div
                style={{
                  color: '#0095f6',
                  fontWeight: 600,
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  whiteSpace: 'nowrap',
                  marginLeft: 16,
                }}
              >
                {linkText}
              </div>
              {!spinnerDisabled && <div style={{ marginRight: 16 }}>{spinner}</div>}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
