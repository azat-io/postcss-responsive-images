# postcss-responsive-images

[![Build Status](https://travis-ci.org/azat-io/postcss-responsive-images.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-responsive-images.svg)][npm] [![Dependency Status](https://gemnasium.com/azat-io/postcss-responsive-images.svg)][deps]

PostCSS plugin for making responsive images.

## Install

With [npm](https://npmjs.org/package/postcss-responsive-images) do:

```
npm install postcss-responsive-images --save
```

## Example

### Input

```css
.boo img {
  image-size: responsive;
}
```

### Output

```css
.boo img {
  max-width:100%;
  height:auto;
  display:block;
}
```

## License

MIT

[ci]:      https://travis-ci.org/azat-io/postcss-responsive-images
[deps]:    https://gemnasium.com/azat-io/postcss-responsive-images
[npm]:     http://badge.fury.io/js/postcss-responsive-images
[postcss]: https://github.com/postcss/postcss
