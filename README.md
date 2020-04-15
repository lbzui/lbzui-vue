# @lbzui/vue

[![npm version](https://img.shields.io/npm/v/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm monthly downloads](https://img.shields.io/npm/dm/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm downloads](https://img.shields.io/npm/dt/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm license](https://img.shields.io/npm/l/@lbzui/vue)](https://github.com/lbzui/vue/blob/master/LICENSE)

> Material Components for Vue.js

@lbzui/vue is now available in [BETA](https://github.com/lbzui/vue/projects/1), but you can read in more depth on [API documentation](https://github.com/lbzui/vue/projects/2) and [documentation website](https://lbzui-vue.lanbizhong.com/) to develop.

If you have any questions, ideas or you want to discuss with it, [create an issue](https://github.com/lbzui/vue/issues/new) or email to lbz_ui@163.com.

## Features

- Follow the principles of [Material Design](https://material.io/)
- Support [Light](https://material.io/design/color/the-color-system.html) and [Dark](https://material.io/design/color/dark-theme.html) theme, and easily adapt darkened UIs to dark theme
- Customize [Layout grid](https://material.io/design/layout/responsive-layout-grid.html), [Shape](https://material.io/design/shape/about-shape.html#shape-customization-tool), [Theme](https://material.io/resources/color/), and more
- Enable `<router-link>` and custom tag of components
- Fit responsive web design (desktop first)
- Use [Vue](https://vuejs.org/) (2.6.0+), [TypeScript](http://www.typescriptlang.org/), [Less](http://lesscss.org/) (3.5.0+), [PostCSS](https://postcss.org/), etc

## Quick start

### Using via CDN

#### Require the stylesheets and scripts in your HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>lbzui-vue-demo</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=block">
    <link rel="stylesheet" href="https://unpkg.com/@lbzui/vue/lib/lbzui.css">
  </head>
  <body>
    <div id="app">
      <lbz-button icon="favorite" @click.stop="fclick">Click me</lbz-button>
    </div>
    <script src="https://unpkg.com/vue@2.6.10"></script>
    <script src="https://unpkg.com/@lbzui/vue"></script>
    <script>
      new Vue({
        el: '#app',
        methods: {
          fclick(e) {
            alert('Hello @lbzui/vue!');
          }
        }
      })
    </script>
  </body>
</html>
```

### Using via NPM

#### Step 1: Create a new project via [Vue CLI](https://cli.vuejs.org/)

```bash
# with npm
npm i @vue/cli -g

# with yarn
yarn global add @vue/cli

# create a new project (customize? please pick `Less` pre-processor!)
# in Windows, run `winpty vue.cmd create lbzui-vue-demo`
vue add lbzui-vue-demo
```

#### Step 2: Install @lbzui/vue in your project

```bash
# with npm
npm i @lbzui/vue -S

# with yarn
yarn add @lbzui/vue
```

#### Step 3: Import @lbzui/vue in your code

```ts
// src/main.ts(.js)
import '@lbzui/vue/lib/lbzui.css';
import LBZUI from '@lbzui/vue';

Vue.use(LBZUI, {
  dense: false,
  ripple: true,
});
```

Or use individual components:

```ts
import '@lbzui/vue/lib/lbzui.css';
import {
  Backdrop,
  Button,
  Card,
  Checkbox,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  Snackbar,
  State,
  Switch,
  Tab,
  TabItem,
  TopAppBar,
} from '@lbzui/vue';

Vue.prototype.$lbzui = {
  dense: false,
  ripple: true,
};

Vue.use(Backdrop);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(EmptyState);
Vue.use(FAB);
Vue.use(Icon);
Vue.use(IconButton);
Vue.use(List);
Vue.use(ListItem);
Vue.use(Radio);
Vue.use(State);
Vue.use(Switch);
Vue.use(Tab);
Vue.use(TabItem);
Vue.use(TopAppBar);

Vue.prototype.$lbzSnackbar = Snackbar;
```

#### Step 4: Build a Material theme

> NOTE: If you just want to use the compiled CSS, you can skip to [Step 5](#step-5-use-components-like-button).

Create your own Material theme by customizing values for [Layout grid](https://material.io/design/layout/responsive-layout-grid.html), [Shape](https://material.io/design/shape/about-shape.html#shape-customization-tool), [Theme](https://material.io/resources/color/), and more.

Install devDependencies through npm or yarn:

```bash
# with npm
## upgrade Less to 3.5.0+
npm i less@latest -D

## CSS resets
npm i normalize.css -D

## convert modern CSS
npm i postcss-preset-env -D

## convert pixel units to rem units (optional)
npm i postcss-pxtorem -D

# with yarn
yarn add less --dev
yarn add normalize.css --dev
yarn add postcss-preset-env --dev
yarn add postcss-pxtorem --dev

# in Windows, run `winpty vue.cmd add style-resources-loader`
vue add style-resources-loader
```

Import CSS source code in `src/main.ts(.js)`:

```ts
// all:
// import '@lbzui/vue/src/assets/css/index.less';

// or individual (recommended):
import '@lbzui/vue/src/assets/css/base.less';

import '@lbzui/vue/src/assets/css/utilities/aspect-ratio.less';
import '@lbzui/vue/src/assets/css/utilities/clearfix.less';
import '@lbzui/vue/src/assets/css/utilities/elevation.less';
import '@lbzui/vue/src/assets/css/utilities/layout-grid.less';
import '@lbzui/vue/src/assets/css/utilities/surface.less';
import '@lbzui/vue/src/assets/css/utilities/truncate.less';
import '@lbzui/vue/src/assets/css/utilities/typography.less';

import '@lbzui/vue/src/assets/css/components/backdrop.less';
import '@lbzui/vue/src/assets/css/components/button.less';
import '@lbzui/vue/src/assets/css/components/card.less';
import '@lbzui/vue/src/assets/css/components/checkbox.less';
import '@lbzui/vue/src/assets/css/components/dialog.less';
import '@lbzui/vue/src/assets/css/components/divider.less';
import '@lbzui/vue/src/assets/css/components/drawer.less';
import '@lbzui/vue/src/assets/css/components/empty-state.less';
import '@lbzui/vue/src/assets/css/components/fab.less';
import '@lbzui/vue/src/assets/css/components/icon.less';
import '@lbzui/vue/src/assets/css/components/icon-button.less';
import '@lbzui/vue/src/assets/css/components/list.less';
import '@lbzui/vue/src/assets/css/components/list-item.less';
import '@lbzui/vue/src/assets/css/components/radio.less';
import '@lbzui/vue/src/assets/css/components/snackbar.less';
import '@lbzui/vue/src/assets/css/components/state.less';
import '@lbzui/vue/src/assets/css/components/switch.less';
import '@lbzui/vue/src/assets/css/components/tab.less';
import '@lbzui/vue/src/assets/css/components/tab-item.less';
import '@lbzui/vue/src/assets/css/components/top-app-bar.less';
```

Prepend variables and mixins to all less files in `vue.config.js`:

```js
const path = require('path')

const LBZUI_CSS_PATH = 'node_modules/@lbzui/vue/src/assets/css/'

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // variables
        // resolve(`${LBZUI_CSS_PATH}variables/_*.less`),

        resolve(`${LBZUI_CSS_PATH}variables/_elevation.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_layout-grid.less`),
        resolve('src/assets/css/lbzui/_layout-grid.less'), // your custom layout grid
        resolve(`${LBZUI_CSS_PATH}variables/_motion.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_shape.less`),
        resolve('src/assets/css/lbzui/_shape.less'), // your custom shape
        resolve(`${LBZUI_CSS_PATH}variables/_state.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_surface.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_theme.less`),
        resolve('src/assets/css/lbzui/_theme.less'), // your custom theme

        // mixins
        resolve(`${LBZUI_CSS_PATH}utilities/_*.less`)
      ]
    }
  }
}
```

Use PostCSS plugins to convert CSS in `package.json` or `postcss.config.js`:

```json
// package.json (if you prefer placing config in package.json)
"postcss": {
  "plugins": {
    "postcss-preset-env": {
      "stage": 3,
      "autoprefixer": {
        "flexbox": "no-2009",
        "grid": "no-autoplace"
      },
      "importFrom": [
        "src/assets/css/lbzui/variables.css"
      ]
    },
    "postcss-pxtorem": {
      "unitPrecision": 8,
      "propList": [
        "font",
        "font-size",
        "line-height"
      ]
    }
  }
},
```

```js
// postcss.config.js (if you prefer placing config in dedicated config files)
module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'no-autoplace'
      },
      importFrom: [
        // "node_modules/@lbzui/vue/src/assets/css/variables/variables.css"
        'src/assets/css/lbzui/variables.css' // your custom CSS Variables
      ]
    },
    'postcss-pxtorem': {
      unitPrecision: 8,
      propList: [
        'font',
        'font-size',
        'line-height'
      ]
    }
  }
}
````

#### Step 5: Use components like Button

```vue
<template>
  <lbz-button @click.stop="fclick">Click me</lbz-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private fclick(e: MouseEvent): void {
    alert('Hello @lbzui/vue!');
  }
}
</script>
```

All examples? Please view [code examples](/tree/master/docs/views) for details.

#### Step 6: Optionally import [Roboto font](https://fonts.google.com/specimen/Roboto) and [Material Icons](https://material.io/resources/icons/) from Google CDN

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap|Material+Icons&display=block">
```

## Browser support

@lbzui/vue supports all [modern browsers](https://browserl.ist/?q=%3E%3D+1%25) (IE: **Layout grid** works unfriendly, and **Dark theme** does not supported).

May work in other browsers but it's untested.

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/lbzui/vue/releases).

## LICENSE

[MIT](/LICENSE)

Copyright (c) 2019-present [LAN Bizhong](https://lanbizhong.com/)
