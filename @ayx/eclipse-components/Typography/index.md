> Use typography to present your design and content as clearly and efficiently as possible.

Too many type sizes and styles at once can spoil any layout.
A [typographic scale](https://material.io/design/typography/#type-scale) has a limited set of type sizes that work well together along with the layout grid.

## Typography variants

```js { "file": "../../../../docs/src/pages/components/core/Typography/Types.js" }
```

## Theme

In some situations you might not be able to use the `Typography` component.
In those case you should take advantage of the [`typography`] keys of the theme.

```js { "file": "../../../../docs/src/pages/components/core/Typography/TypographyTheme.js" }
```
## Changing the semantic element

The Typography component uses the `variantMapping` property to associate a UI variant with a semantic element.
It’s important to realize that the style of a typography is independent from the semantic underlying element.

- You can change the underlying element for a one time occasion with the `component` prop:

```jsx static
{/* We already have an h1 in the page, let's not duplicate it. */}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
```

## Alteryx fonts

Alteryx uses 2 main fonts: *Lato* and *Segoe UI* (pronounced _SEE-goh_). *Segoe UI* is used in Designer Desktop and *Lato* is used everywhere else. A third font called *Meiryo* is used when the language is set to Japanese.

The *Lato* font is a web font and will **not** be automatically loaded by UI-Core.
The developer is responsible for loading all fonts used in their application.

<!-- [test](#/Core%20Components/Typography/#how-to-load) -->
## How to load web fonts <a name="how-to-load"></a>

UI-Core will automatically apply the main font on the components and HTML elements but you will need to download and set up the web fonts yourself. These are the steps:

### Download web font file

To load web fonts you will need to add the static web font files to your application. Note that *Segoe UI* and *Meiryo* are native fonts and do not need to be loaded. Web fonts, such as *Lato* and *Montserrat*, can be downloaded below:

```jsx { "file": "../../../../docs/src/pages/components/core/Typography/Downloads.js", "noeditor": true }
```

### Create css file
You will need to create and import a css file with the following code that references the fonts you've just downloaded. If you don't need every font weight, you can just use the `@font-face` for the weights you need and not include the others.

Note: You'll probably have to manage the `url()` path in the `src` property to match your project structure.

```css
@font-face {
  font-family: 'Lato';
  src: url('font/lato-regular.woff2') format('woff2'),
       url('font/lato-regular.woff') format('woff');
  font-weight: 400;
  font-weight: 'normal' 'regular';
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('font/lato-bold.woff2') format('woff2'),
       url('font/lato-bold.woff') format('woff');
  font-weight: 500 700;
  font-weight: 'medium' 'bold';
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('font/lato-black.woff2') format('woff2'),
       url('font/lato-black.woff') format('woff');
  font-weight: 800 900;
  font-weight: 'black' 'heavy'
  font-style: normal;
}
```

### Enable your build system to load font files and import css files
It is recommended using Alteryx's front end build system [ayx-scripts](https://git.alteryx.com/ui-core/toolchain/ayx-scripts). This is already configured to support font and CSS importing. If you cannot you will need to adjust your webpack manually by using the rules such as the following:

File loader rule:
```javascript static
{
  test: /\.(woff|woff2)$/,
  use: ['file-loader']
}
```

CSS import rule:
```javascript static
// dev
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

// production
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
{
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader']
}

```

⚠️ Be careful when loading web fonts! 
Due to performance considerations only load the fonts and weights needed for your application.
UI-Core default typography configuration only relies on 300, 400, 500, and 700 font weights.


## Props API
- [Typography](https://material-ui.com/api/typography/)
