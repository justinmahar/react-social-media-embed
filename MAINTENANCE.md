# Maintenance

This document contains information on how to maintain this project.

## Updater

This project has a built in updater that syncs projects with the starter.

```
npm run update
```

## Storybook

See the documentation on upgrading here: https://storybook.js.org/docs/configure/upgrading

## Updating Dependencies

Use `ncu` to check which packages need to be upgraded.

#### `remark-gfm`

As of 2/5/23, `remark-gfm` v4 causes the project to fail compilation. If you upgrade and compatibility had been fixed, feel free to remove this note.