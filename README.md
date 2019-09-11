# parcel-plugin-zengine-css-migrator

Parcel plugin that interpolates v1 plugin CSS into v2 CSS file

Also see:
[parcel-plugin-zengine-js-migrator](https://github.com/tehpsalmist/parcel-plugin-zengine-js-migrator)
[parcel-plugin-zengine-html-migrator](https://github.com/tehpsalmist/parcel-plugin-zengine-html-migrator)

## Installation

`npm i -d parcel-plugin-zengine-css-migrator`

_Attention: parcel-bundler has to be installed_

## Usage
 
1. Add this comment: `/* PLUGIN_CSS */` to your `src/plugin.css` (probably at the bottom of that file).
2. Ensure all of your plugin's CSS lives in `plugin/plugin.css`
3. Run parcel normally

### Example

_**src/plugin.css**_

```css
.my-default-rule {
  color: pink;
}

/* PLUGIN_CSS */
```

_**run it**_  
`parcel index.html`

_**output**_

```css
.my-default-rule {
  color: pink;
}

.title {
  color: purple;
}

.i-dont-know-what-you-named-your-css-classes {
  display: flex;
}

.but-here-they-are {
  display: grid; /* ooh, risky */
}
```
