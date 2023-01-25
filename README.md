<h2 align="center">
  📰 React Social Media Embed
</h2>
<h3 align="center">
  Easily embed social media posts from Facebook, Instagram, LinkedIn, Pinterest, TikTok, Twitter, and YouTube in React.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-social-media-embed" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-social-media-embed.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-social-media-embed/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-social-media-embed/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-social-media-embed/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-social-media-embed/)**.

## Overview

Easily embed content from several popular social media platforms in React.

All embeds only require a URL to the post. No API token is needed.

Currently supporting: Facebook, Instagram, LinkedIn, Pinterest, TikTok, Twitter, and YouTube.

### Features include:

- **🚀 Quick and easy**
  - Embed content quickly and easily for the most popular social media platforms. Just provide a URL!
- **💁 Live demos**
  - Give the embeds a try and play with their props using live examples.
- **⚙️ Customizable**
  - Each embed supports all div props and provides additional options, such as a placeholder.
- **💪 Resilient**
  - If embedding fails, it automatically retries using a configurable retry delay.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Facebook](#facebook)
    - [How do you get a Facebook post URL?](#how-do-you-get-a-facebook-post-url)
    - [IFrame Support](#iframe-support)
  - [Instagram](#instagram)
    - [How do you get an Instagram post URL?](#how-do-you-get-an-instagram-post-url)
    - [IFrame Support](#iframe-support-1)
  - [LinkedIn](#linkedin)
    - [How do you get a LinkedIn post URL?](#how-do-you-get-a-linkedin-post-url)
  - [Pinterest](#pinterest)
    - [How do you get a Pinterest pin URL?](#how-do-you-get-a-pinterest-pin-url)
  - [TikTok](#tiktok)
    - [How do you get a TikTok post URL?](#how-do-you-get-a-tiktok-post-url)
    - [IFrame Support](#iframe-support-2)
  - [Twitter](#twitter)
    - [How do you get a Twitter tweet URL?](#how-do-you-get-a-twitter-tweet-url)
  - [YouTube](#youtube)
    - [How do you get a YouTube video URL?](#how-do-you-get-a-youtube-video-url)
  - [Placeholder](#placeholder)
- [How It Works](#how-it-works)
  - [Facebook](#facebook-1)
  - [Instagram](#instagram-1)
  - [LinkedIn](#linkedin-1)
  - [Pinterest](#pinterest-1)
  - [TikTok](#tiktok-1)
  - [Twitter](#twitter-1)
  - [YouTube](#youtube-1)
    - [Thumbnail Refetching](#thumbnail-refetching)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-social-media-embed
```

## Usage

### Facebook

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-facebookembed--main-example)

```jsx
import { FacebookEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} />
</div>
```

This will display the Facebook embed centered with a width of `550`.

For a live example and more options, read the [full documentation for FacebookEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-facebookembed--main-example).

#### How do you get a Facebook post URL?

For the post you'd like to embed, select `⋯` › `Embed` › `Advanced settings` › `Get Code`, then use the `cite` link in the generated `blockquote`. 

See [these instructions which include screenshots](https://github.com/justinmahar/react-social-media-embed/issues/14#issuecomment-1297458134) for more info.

#### IFrame Support

For `iframe` support, you can provide `window` and `document` via the `frame` prop.

### Instagram

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example)

```jsx
import { InstagramEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
</div>
```

This will display the Instagram embed centered with a width of `328`.

For a live example and more options, read the [full documentation for InstagramEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example).

#### How do you get an Instagram post URL?

A few options:
- Open a post and select `…` > `Copy Link`
- Open a post in a browser window and copy the URL from the address bar. The URL should be in the format: `https://www.instagram.com/p/abc123xyzAB/`
- Open a post and select `…` > `Embed` > `Copy embed code`. Paste the embed code in a text editor, then locate the `data-instgrm-permalink` attribute and use that link.

#### IFrame Support

For `iframe` support, you can provide `window` and `document` via the `frame` prop.

### LinkedIn

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-linkedinembed--main-example)

```jsx
import { LinkedInEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <LinkedInEmbed 
    url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
    postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
    width={325}
    height={570} 
  />
</div>
```

This will display the LinkedIn embed centered with a width of `325` and height of `570`.

For a live example and more options, read the [full documentation for LinkedInEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-linkedinembed--main-example).

#### How do you get a LinkedIn post URL?

The `url` must be be retrieved from the "Embed this post" option for the desired post. Use the `src` attribute of the `iframe`:

```html
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384" height="570" width="325" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
```

It is recommended that you specify the `width` and `height` of the post. These have been pre-calculated in the `iframe` embed code as well.

You can also specify a `postUrl` which will be used in the placeholder to link to the regular, non-embed version of the post.

### Pinterest

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-pinterestembed--main-example)

```jsx
import { PinterestEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <PinterestEmbed 
    url="https://www.pinterest.co.uk/pin/875105771321194304/"
    width={345}
    height={467}
  />
</div>
```

This will display the Pinterest embed centered with a width of `345`. You can specify a `height` if you'd like to adjust how much of the pin is vertically shown. See below for determining the correct `width` and `height` to use.

For a live example and more options, read the [full documentation for PinterestEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-pinterestembed--main-example).

#### How do you get a Pinterest pin URL?

Visit a Pinterest post in your browser. Copy the URL from the address bar.

The URL must contain the pin ID, in the format `pin/1234567890123456789`. Short links are not supported.

It is recommended that you specify the `width` and `height` of the post. These have been pre-calculated in the `iframe` embed code provided by Pinterest for the post.

Select the ellipsis `...` by the post and select "Get Pin embed code". Then use the `height` and `width` shown for the post you'd like to embed.

```html
<iframe src="https://assets.pinterest.com/ext/embed.html?id=875105771321194304" height="467" width="345" frameborder="0" scrolling="no" ></iframe>
```

### TikTok

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-tiktokembed--main-example)

```jsx
import { TikTokEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url="https://www.tiktok.com/@epicgardening/video/7055411162212633903" width={325} />
</div>
```

This will display the TikTok embed centered with a width of `325`.

For a live example and more options, read the [full documentation for TikTokEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-tiktokembed--main-example).

#### How do you get a TikTok post URL?

Open a post in your browser. The post URL will be shown. Click the `Copy Link` button.

The URL must contain the video ID, in the format `https://www.tiktok.com/@username/video/1234567890123456789`. Short links are not supported.

#### IFrame Support

For `iframe` support, you can provide `window` and `document` via the `frame` prop.

### Twitter

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-twitterembed--main-example)

```jsx
import { TwitterEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" width={325} />
</div>
```

This will display the Twitter embed centered with a width of `325`.

This component uses the [`react-twitter-embed`](https://www.npmjs.com/package/react-twitter-embed) package to embed content. You can specify props for the internal [`TwitterTweetEmbed`](https://github.com/saurabhnemade/react-twitter-embed#usage) component via the `twitterTweetEmbedProps` prop.

For a live example and more options, read the [full documentation for TwitterEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-twitterembed--main-example).

#### How do you get a Twitter tweet URL?

Open a Twitter tweet in a browser window. Copy the link to the tweet from the address bar.

The URL must contain the tweet ID, in the format `https://twitter.com/username/status/1234567890123456789`. Short links are not supported.

Alternate option: Select `…` > `Embed Tweet`, and use the `a href` attribute value from the provided embed code.

### YouTube

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-youtubeembed--main-example)

```jsx
import { YouTubeEmbed } from 'react-social-media-embed';
```

```jsx
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={325} height={220} />
</div>
```

This will display the YouTube embed centered with a width of `325` and height of `220`.

This component uses the [`react-youtube`](https://www.npmjs.com/package/react-youtube) package to embed content. You can specify props for the internal [`YouTube`](https://github.com/tjallingt/react-youtube#usage) component via the `youTubeProps` prop.

For a live example and more options, read the [full documentation for YouTubeEmbed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-youtubeembed--main-example).

#### How do you get a YouTube video URL?

Open the video in a browser window. Copy the URL from the address bar. You can also click `Share` > `Copy`.

The URL must be in the format `https://www.youtube.com/watch?v=VIDEO_ID` or `https://youtu.be/VIDEO_ID` where `VIDEO_ID` is the video ID.

### Placeholder

[👁️ View Demo](https://justinmahar.github.io/react-social-media-embed/?path=/docs/placeholder-placeholderembed--main-example)

```jsx
import { PlaceholderEmbed } from 'react-social-media-embed';
```

A placeholder is shown while loading. If you do not specify a placeholder via the `embedPlaceholder` prop, a default `PlaceholderEmbed` placeholder component will be used. You can disable the placeholder with the `placeholderDisabled` prop. 

The default placeholder will size itself according to the width and/or height you specify for the embed. If none are specified, it will fall back to a default size appropriate for the given social media platform. You can pass custom props (such as `style`) to the default placeholder via `placeholderProps` to override any default behavior.

If you'd like, you can specify the  `placeholderImageUrl` prop to any of the embeds to show a placeholder with the provided image. 

By default, the placeholder spinner is a `BorderSpinner` with a width/height of `10` and 25% transparent black border of `3px`. You can specify the `placeholderSpinner` prop to provide your own custom spinner, and the `placeholderSpinnerDisabled` prop to remove the placeholder spinner altogether.

See the [PlaceholderEmbed docs](https://justinmahar.github.io/react-social-media-embed/?path=/docs/placeholder-placeholderembed--main-example) for examples and more.

## How It Works

Each embed has a slightly different implementation. I've tried my best to standardize the embed experience for each from a developer standpoint so you don't have to think about how it performs the embed. 

If you're curious how the embeds happen, read on!

### Facebook

We use the [Facebook JavaScript SDK](https://developers.facebook.com/docs/plugins/embedded-posts/) to embed content.

This loads a script which initializes the Facebook embedder to `window.FB.XFBML`.

A Facebook post uses the following form:

```html
<div class="fb-post" data-href="{your-post-url}"></div>
```

We then use the [`FB.XFBML.parse()`](https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse/) function to manually initialize the embed HTML.

### Instagram

We use the [Instagram embed.js JavaScript library](https://developers.facebook.com/docs/plugins/embedded-posts/) to embed content. In the documentation, you can refer to the section titled "Embed JS" for details.

This loads a script which initializes the Instagram embedder to `window.instgrm.Embeds`.

An Instagram post uses the following form:

```html
<blockquote class="instagram-media"
            data-instgrm-permalink="{your-post-url}"
            data-instgrm-version="14">
  <div>Placeholder</div>
</blockquote>
```

We then use the [`instgrm.Embeds.process()`](https://developers.facebook.com/docs/instagram/oembed/) function to manually initialize the embed HTML.

### LinkedIn

LinkedIn does not have an embed JS library, unfortunately. So we use a simple `iframe` with the embed URL from LinkedIn's embed option, which is accessed via the menu next to any given post that has embedding allowed. If a post does not have embedding allowed, this option will not appear.

LinkedIn provides you with an `iframe` with an `src` attribute and the calculated `width` and `height`. Use these attributes for your embed.

### Pinterest

We use a simple `iframe` with the URL of the Pinterest pin you'd like to embed.

Pinterest provides you with embed code containing an `iframe` with the calculated `width` and `height`. The embed code is accessed via the menu next to any given pin that has embedding allowed. Use these `width` and `height` attributes for your embed.

### TikTok

We use the [TikTok embed.js JavaScript library](https://developers.tiktok.com/doc/embed-videos) to embed content. 

This loads a [script](https://www.tiktok.com/embed.js) which initializes the TikTok embedder to `window.tiktokEmbed`.

A TikTok post uses the following form:

```html
<blockquote class="tiktok-embed" cite="{your-post-url}" data-video-id="{video-id}">
  <div>Placeholder</div>
</blockquote>
```

Unfortunately, unlike Facebook and Instagram, there is no documented or obvious way to manually initialize the embed HTML. **[If you know how to do this, please open a GitHub issue with the info!](https://github.com/justinmahar/react-social-media-embed/issues/new)**

So, in order to initialize the embed HTML, we must load the embed script from TikTok every time we render the TikTok embed. To do this, we use time-based query param cache busting and replace the embed.js script element in the `head` node. This forces the browser to load the script anew each time, which then performs the embed.

For example, here's the script element with `t` as the current time:

```html
<script src="https://www.tiktok.com/embed.js?t=1645275849920" id="tiktok-embed-script"></script>
```

Again, if there's a way to manually initialize the embed HTML through the already-loaded script, please [open an issue](https://github.com/justinmahar/react-social-media-embed/issues/new) so this can be improved. For now, this gets the job done!

### Twitter

We use the [`react-twitter-embed`](https://www.npmjs.com/package/react-twitter-embed) package to embed Twitter tweets. This completely amazing package does all the heavy lifting. Please consider supporting the project.

You can specify props for the internal [`TwitterTweetEmbed`](https://github.com/saurabhnemade/react-twitter-embed#usage) component via the `twitterTweetEmbedProps` prop.

### YouTube

We use the [`react-youtube`](https://www.npmjs.com/package/react-youtube) package to embed YouTube videos. This incredibly awesome package does all the heavy lifting. Please consider supporting the project.

You can specify props for the internal [`YouTube`](https://github.com/tjallingt/react-youtube#usage) component via the `youTubeProps` prop.

#### Thumbnail Refetching

If you have problems with pixelated thumbnails, try this solution to trigger thumbnail refetching:

```jsx
const YOUTUBE_DEFAULT_HEIGHT = 390;
const [embedHeight, setEmbedHeight] = React.useState(YOUTUBE_DEFAULT_HEIGHT);

<YouTubeEmbed
  height={embedHeight}
  youTubeProps={{
    onReady: async (r) =>
      (await r.target.getIframe()).addEventListener('load', () => setEmbedHeight((height) => height + 1)),
  }}
/>
```

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-social-media-embed/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-social-media-embed/stargazers): [👉⭐](https://github.com/justinmahar/react-social-media-embed/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-social-media-embed/?path=/story/license--page).
