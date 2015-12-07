import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input)
    .then( result => {
      t.same(result.css, output);
      t.same(result.warnings().length, 0);
    });
}

test('Add stylesheets for making responsive images', t => {
  return run(t, 'img { image-size: responsive }', 'img { max-width: 100%; height: auto; display: block }', { });
});
