<h2 align="center">
  <a href="https://github.com/justinmahar/react-kindling" target="_blank" rel="noopener noreferrer">🔥 React Kindling</a>
</h2>
<h3 align="center">
  A template to build, test, and share React components and hooks easily.
</h3>
<p align="center">
  <a href="https://github.com/justinmahar/react-kindling/generate" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/>
  </a>
  <a href="https://github.com/justinmahar/react-kindling/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" />
  </a>
  <a href="https://github.com/justinmahar/react-kindling/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/justinmahar/react-kindling/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

Read the **[official documentation](https://justinmahar.github.io/react-kindling/)**.

<h3>
  <a href="https://justinmahar.github.io/react-kindling/" target="_blank" rel="noopener noreferrer">
  👁️ Live Demo
  </a>
</h3>

## Overview

This is a starter for [React](https://reactjs.org/) component and [hook](https://reactjs.org/docs/hooks-intro.html) libraries.

React Kindling includes everything you need to build a React library including a standalone documentation site via GitHub Pages ([see demo](https://justinmahar.github.io/react-kindling/)).

See the [10+ projects using React Kindling](https://github.com/justinmahar/react-kindling#projects-using-react-kindling), and build your own.

### Features include:

- **✨ [TypeScript](https://www.typescriptlang.org/) support**
  - For type checking and safety.
- **📖 [Storybook](https://storybook.js.org/) stories**
  - Use stories to visualize as you build.
- **👓 [README template](https://github.com/justinmahar/react-kindling/blob/master/README.template.md)**
  - Just fill it out. Includes npm and deploy badges for street cred.
- **🌎 [GitHub Pages](https://pages.github.com/) pre-configuration**
  - Auto-deploy your Storybook documentation site to GitHub Pages with a single opt-in project config.
- **📦 Easy [npm publish](https://docs.npmjs.com/cli/publish)**
  - Build, version, and ship it to [npm](https://www.npmjs.com/) with one command: `npm run ship`
- And more!

## Quick Start

### Click the button below to get started with React Kindling:

<a href="https://github.com/justinmahar/react-kindling/generate" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/></a>

You will be prompted for a repo name and description, and GitHub will do the rest.

**Note:** This approach is recommended over cloning or forking because [repositories created from a template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) start with a single commit and are not treated as forks, but instead as an entirely new project.

Then `git clone` your project once it's set up.

### Install dependencies

```
npm install
```

### Title and URL

Update the site title in `.storybook/theme.js`.

### Favicon

Favicon files can be customized in the `public` directory.

You must also update the links in `.storybook/manager-head.html`.

### Use Storybook to develop your components and hooks

[Storybook](https://storybook.js.org/) lets you develop your React components and hooks in isolation. Each "storybook" is a file that contains "stories", which are just the different visual states of your component or hook.

You can run Storybook using:

```
npm start
```

Your browser will automatically open to [localhost:6006](http://localhost:6006/).

In `src/stories`, an example story is provided. Use this as a starting point for your own components.

You can add MDX files to this directory as well. These will become pages in Storybook and can be used for additional documentation.

Storybook will automatically generate documentation for your components using JSDoc comments.

### Export modules from `index.tsx`

Export anything you'd like to make available to the outside world in `index.tsx`.

These will be the modules that can be imported from your npm package after it's installed.

### Updater

This project uses [LockBlocks](https://github.com/justinmahar/lockblocks) for updater support. This keeps boilerplate in sync with the main `react-kindling` starter.

To update, make sure your working directory is clean and run:

```
npm run update
```

Changes will be logged to `lockblocks.log`.

### Deploy to GitHub Pages

With a single project setting, you can auto-deploy your Storybook documentation to [GitHub Pages](https://pages.github.com/).

A [GitHub Action](https://github.com/features/actions) has already been configured for you in `.github/deploy.yml`.

Just add an access token to authorize GitHub to build and deploy your Storybook static site for you.

#### To enable GitHub Pages deploys:

- Create a `repo`-scoped [Personal access token](https://github.com/settings/tokens).
- Add the token to your GitHub project: **Settings » Secrets**. Name it: `ACCESS_TOKEN`
- Now, when you push code, your project's documentation will be built and deployed to GitHub Pages automatically. 🎉

Links to your Storybook site and deploy status are available in the template README. If this is your first deploy, it can take up to 10 minutes for your GitHub Pages site to show up.

### Markdown Pages

The following Markdown files are generated as Storybook pages by default:

- [README.md](https://justinmahar.github.io/react-kindling/?path=/story/home--page)
- [LICENSE.md](https://justinmahar.github.io/react-kindling/?path=/story/license--page)
- [CODE_OF_CONDUCT.md](https://justinmahar.github.io/react-kindling/?path=/story/code-of-conduct--page)

### README Template

The file README.template.md contains a template README. Just fill it out.

### npm Publish Checklist

About to wrap up and publish to npm? Double-check the following:

- No unwanted `console.log` calls
- Code is fully documented
- All components render properly in Storybook
- **Most important: Components and hooks are exported from `src/index.tsx`**
  - If you forget to export, none of your hard work will be available via npm!

### Publish to npm

When you're finished developing, you can easily ship it to npm with one command. Once published to npm, others can install and use your package with `npm install`.

If you haven't already, log into npm:

```
npm login
```

Then publish with a single command:

```
npm run ship
```

This command will build your project, add/commit the freshly built `dist` directory, increment the package version, publish to npm, and push to GitHub.

If you have any unsaved changes, this script will immediately fail until your working directory is clean.

### Celebrate!

You've done it! Your project is ready for the world.

## Projects Using React Kindling

The following projects were built on React Kindling:

- [react-analytics-charts](https://justinmahar.github.io/react-analytics-charts)
- [react-super-seo](https://justinmahar.github.io/react-super-seo)
- [react-bootswatch-select](https://justinmahar.github.io/react-bootswatch-select)
- [react-build-status-badge](https://justinmahar.github.io/react-build-status-badge)
- [react-authless-admin](https://justinmahar.github.io/react-authless-admin)
- [react-timed-renderer](https://justinmahar.github.io/react-timed-renderer)
- [react-timed-image](https://justinmahar.github.io/react-timed-image)
- [react-uncached-image](https://justinmahar.github.io/react-uncached-image)
- [react-use-analytics-api](https://justinmahar.github.io/react-use-analytics-api)
- [react-use-precision-timer](https://justinmahar.github.io/react-use-precision-timer)
- [react-use-window-localstorage](https://justinmahar.github.io/react-use-window-localstorage)
- [react-use-window-sessionstorage](https://justinmahar.github.io/react-use-window-sessionstorage)
- [react-use-window-scroll](https://justinmahar.github.io/react-use-window-scroll)

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-kindling/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-kindling/stargazers): [👉⭐](https://github.com/justinmahar/react-kindling/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-kindling/?path=/story/license--page).