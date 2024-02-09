import { create } from '@storybook/theming';
import packageJson from '../package.json';

const brandTitle = 'React Social Media Embed';
const brandUrl = packageJson.homepage;
const base = 'light'; // 'dark'
const brandImage = undefined; // `/brand.svg`; // 150x30

export default create({
  // [lock:core] 🚫---------------------------------------
  base,
  brandTitle,
  brandUrl,
  brandImage,
  // [/lock:core] ---------------------------------------🚫
});
