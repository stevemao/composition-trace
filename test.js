const tap = require('tap')
const trace = require('./')

const foo = () => 'foo'

tap.equal(trace('foo:', foo()), 'foo')
tap.equal(trace('foo:')(foo()), 'foo')
