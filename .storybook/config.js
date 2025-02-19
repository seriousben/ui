import { addDecorator, configure } from '@storybook/html';
import { defineCustomElements } from '../dist/loader';
import '../dist/manifold/manifold.css';
import { addReadme } from 'storybook-readme/html';

// Init web components
defineCustomElements();

// storybook-readme
addDecorator(addReadme);

// Load stories (import all files ending in *.stories.js)
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
