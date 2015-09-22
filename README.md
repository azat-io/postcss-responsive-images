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

## Author

Azat S.

<a href="https://github.com/azat-io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/github.png" style="float:right">
</a>
<a href="https://twitter.com/azat_io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/twitter.png" style="float:right">
</a>
<a href="https://www.facebook.com/azats.io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/facebook.png" style="float:right">
</a>

## License

MIT

[ci]:      https://travis-ci.org/azat-io/postcss-responsive-images
[deps]:    https://gemnasium.com/azat-io/postcss-responsive-images
[npm]:     http://badge.fury.io/js/postcss-responsive-images
[postcss]: https://github.com/postcss/postcss
