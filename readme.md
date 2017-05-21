# Usage

```js
const trace = require('trace');

var dasherize = compose(join('-'), toLower, trace('after split'), split(' '), replace(/\s{2,}/ig, ' '));
// after split [ 'The', 'world', 'is', 'a', 'vampire' ]

dasherize('The world is a vampire');
```

For more details, please see https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html#debugging

# Alternatives

- [treis](https://github.com/raine/treis)
- [`tap`](http://ramdajs.com/docs/#tap)
