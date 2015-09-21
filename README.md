# [postcss][postcss]-responsive-images [![Build Status](https://travis-ci.org/azat-io/postcss-responsive-images.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-responsive-images.svg)][npm] [![Dependency Status](https://gemnasium.com/azat-io/postcss-responsive-images.svg)][deps]

> PostCSS plugin for making responsive images

## Install

With [npm](https://npmjs.org/package/postcss-responsive-images) do:

```
npm install postcss-responsive-images --save
```

## Example

### Input

```css
h1 {
    color: red;
}
```

### Output

```css
h1{color:red}
```

## API

### responsiveImages([options])

#### options

##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('postcss-responsive-images')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Azat S.](https://github.com/azat-io/postcss-responsive-images)

[ci]:      https://travis-ci.org/azat-io/postcss-responsive-images
[deps]:    https://gemnasium.com/azat-io/postcss-responsive-images
[npm]:     http://badge.fury.io/js/postcss-responsive-images
[postcss]: https://github.com/postcss/postcss
