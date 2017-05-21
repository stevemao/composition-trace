# Problem

```js
var dasherize = compose(join('-'), toLower, split(' '), replace(/\s{2,}/ig, ' '));

dasherize('The world is a vampire');
// TypeError: Cannot read property 'apply' of undefined
```

What arguments is `toLower` called with?
What does `split(' ')` return?

# Let's `trace`

```js
const trace = require('composition-trace');

var dasherize = compose(join('-'), toLower, trace('after split'), split(' '), replace(/\s{2,}/ig, ' '));
// after split [ 'The', 'world', 'is', 'a', 'vampire' ]

dasherize('The world is a vampire');
```

For more details, please see https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html#debugging

# Alternatives

- [treis](https://github.com/raine/treis)
- [`tap`](http://ramdajs.com/docs/#tap)

# Related

- [inspect-curry](https://github.com/stevemao/inspect-curry)
- [inspect-compose](https://github.com/stevemao/inspect-compose)
