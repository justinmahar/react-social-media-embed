<h2 align="center">
  📰 React Social Media Embed
</h2>
<h3 align="center">
  Easily embed social media posts from Facebook, Instagram, LinkedIn, TikTok, Twitter, and YouTube in React.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-social-media-embed" target="_blank" rel="noopener noreferrer">
    <img src="https://badge.fury.io/js/react-social-media-embed.svg" alt="npm Version" />
  </a>
  <a href="https://github.com/justinmahar/react-social-media-embed/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" />
  </a>
  <a href="https://github.com/justinmahar/react-social-media-embed/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/justinmahar/react-social-media-embed/workflows/Deploy/badge.svg" alt="Deploy Status" />
  </a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-social-media-embed/)**.

## Overview

Easily embed content from several popular social media platforms in React.

All embeds only require a URL to the post.

Currently supporting: Facebook, Instagram, LinkedIn, TikTok, Twitter, and YouTube.

### Features include:

- **🚀 Quick and easy**
  - Embed content quickly and easily from the most popular social media platforms

## Table of Contents

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Facebook](#facebook)
  - [Instagram](#instagram)
  - [LinkedIn](#linkedin)
  - [TikTok](#tiktok)
  - [Twitter](#twitter)
  - [YouTube](#youtube)
  - [Placeholders](#placeholders)
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

```jsx
import { FacebookEmbed } from 'react-social-media-embed';
```

```jsx
<FacebookEmbed url="https://fb.watch/b67iYbdzNm/" />
```

### Instagram

```jsx
import { InstagramEmbed } from 'react-social-media-embed';
```

```jsx
<InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
```

### LinkedIn

```jsx
import { LinkedInEmbed } from 'react-social-media-embed';
```

```jsx
<LinkedInEmbed 
  url="https://www.linkedin.com/embed/feed/update/urn:li:share:6892528764350185473"
/>
```

The `url` must be be retrieved from the "Embed this post" option for the desired post. Use the `src` attribute of the `iframe`:

```html
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6892528764350185473" height="592" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
```

It is recommended that you specify the `width` and `height` of the post. These have been pre-calculated in the `iframe` embed code as well.

You can also specify a `postUrl` which will be used in the placeholder to link to the regular, non-embed version of the post.

```jsx
<LinkedInEmbed 
  url="https://www.linkedin.com/embed/feed/update/urn:li:share:6892528764350185473"
  postUrl="https://www.linkedin.com/posts/garyvaynerchuk_join-our-discord-its-consistently-fun-activity-6892528765080002561-mFyb"
  width={504}
  height={592}
/>
```

### TikTok

```jsx
import { TikTokEmbed } from 'react-social-media-embed';
```

```jsx
<TikTokEmbed url="https://www.tiktok.com/@epicgardening/video/7055411162212633903?is_copy_url=1&is_from_webapp=v1" />
```

### Twitter

```jsx
import { TwitterEmbed } from 'react-social-media-embed';
```

```jsx
<TwitterEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" />
```

This component uses the [`react-twitter-embed`](https://www.npmjs.com/package/react-twitter-embed) package to embed content. You can specify props for the internal [`TwitterTweetEmbed`](https://github.com/saurabhnemade/react-twitter-embed#usage) component via the `twitterTweetEmbedProps` prop.

### YouTube

```jsx
import { YouTubeEmbed } from 'react-social-media-embed';
```

```jsx
<YouTubeEmbed url="https://www.youtube.com/watch?v=d-qqom30TZA" />
```

This component uses the [`react-youtube`](https://www.npmjs.com/package/react-youtube) package to embed content. You can specify props for the internal [`YouTube`](https://github.com/tjallingt/react-youtube#usage) component via the `youTubeProps` prop.

### Placeholders

Default placeholders have been included for each social media platform. If you do not specify a placeholder via `embedPlaceholder`, a default will be used.

```jsx
import { FacebookPlaceholder } from 'react-social-media-embed';
import { InstagramPlaceholder } from 'react-social-media-embed';
import { LinkedInPlaceholder } from 'react-social-media-embed';
import { TikTokPlaceholder } from 'react-social-media-embed';
import { TwitterPlaceholder } from 'react-social-media-embed';
import { YouTubePlaceholder } from 'react-social-media-embed';
```

Each placeholder takes a `url` to the post. Clicking the placeholder will navigate to the provided URL in a new tab.

Optionally, provide `linkText` to customize the text, and `imageUrl` to show a placeholder image. 

If you provide an image URL, the placeholder will size the image to 100% width.

Disable the placeholder with the `placeholderDisabled` prop.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Icon Attribution

Icon by [Twemoji](https://github.com/twitter/twemoji).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-social-media-embed/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-social-media-embed/stargazers): [👉⭐](https://github.com/justinmahar/react-social-media-embed/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-social-media-embed/?path=/story/license--page).