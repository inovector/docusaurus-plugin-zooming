# Docusaurus Plugin Zooming

This plugin uses the [`Zooming`](https://www.npmjs.com/package/zooming) library to allow for zoom in/out on images in your documentation.

## Install

```shell
npm install docusaurus-plugin-zooming
```

## Usage

Update `docusaurus.config.js` to enable the plugin and include its default configuration:

```js
  const config = {
    // ...other config
    
    plugins: [
      'docusaurus-plugin-zooming',
      // ...other plugins
    ],
    
    themeConfig: {
      // ...other themeConfig
      
      zooming: {
        selector: '.markdown img',
        delay: 500,
        background: {
          light: 'rgba(101,108,133,0.8)',
          dark: 'rgba(9,10,17,0.8)'
        },
        options: {
          // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    },
  }
  
  module.exports = config;
```

## Configuration

This plugin allows you to configure the following options:

| Option        | Description                                                                                      | Default Value                                                                                         |
|---------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `selector`    | (optional) The selector for zoomable image elements.                                          | `.markdown img`                                                                                      |
| `delay`    | (optional) Make imgaes zoomable with delay after entering a page                                          | `500`                                                                                      |
| `background`  | (optional) The background color to use for the zoomed image.                                     | `{ light: 'rgb(255, 255, 255, 0.9)', dark: 'rgb(50, 50, 50, 0.9)' }`                                           |
| `options`      | (optional) The configuration object to pass to `zooming`.                                   | `{}`                                                                                                 |

Example usage in `docusaurus.config.js`:

```js
  themeConfig: {
    zooming: {
      selector: '.markdown :not(em) > img',
      delay: 500,
      background: {
        light: 'rgba(101,108,133,0.8)',
        dark: 'rgba(9,10,17,0.8)'
      },
      options: {
        enableGrab: false,
        // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  }
```
