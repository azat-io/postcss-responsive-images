'use strict';

var postcss = require('postcss');
module.exports = postcss.plugin('postcss-responsive-images', function (opts) {
  return function (css) {
    var responsiveImages = function(decl) {
      var origRule = decl.parent;
      origRule.append('max-width: 100%; height: auto; display: block;');
      decl.remove();
    };
    css.walkDecls('image-size', function(decl) {
      switch (decl.value) {
        case 'responsive':
          responsiveImages(decl);
          break;
      }
    });
  };
});
