# Bracketing

`bracketing` is a small utility function to effeciantly walk and compare consecutive elements in an array or string and extract the longest sub array that fulfills this predicate. It is essentially two managed array pointers to traverse an array with the bare minimum number of comparisons. It will return the longest sequence that satisfies the supplied predicate function. 

[![Current Version](https://img.shields.io/npm/v/bracketing.svg?style=flat-square)](https://www.npmjs.org/package/bracketing)
[![Build Status](https://travis-ci.org/continuationlabs/bracketing.svg?branch=master)](https://travis-ci.org/continuationlabs/bracketing)

## Useage

These following examples demonstrate some basic usage and should give you a better idea what `bracketing` is all about

```js
const bracketing = require('bracketing');

let result;

result = bracketing((left, right) => right > left, [1, 2, 3, 0, 5, 6, 7, 8, 100]);
// result equals [0, 5, 6, 7, 8, 100] because it is the longest sub array where the right value is greater than the left
result = bracketing((left, right) => left === right, 'aaaaaabbbbbccdeeeeeeeeeee');
// result equals "eeeeeeeeeee" because it is the longest substring where each character equals the one to the right
```

## API

### `bracketing(predicate, sequence)`

Returns the result of running the `predicate` against `sequence`. The result is either a string or array, matching the type of `sequence`.

- `predicate` - a function to run against the elements of `sequence`. It must return a `boolean` value indicating pass or fail of the two elements. Has the following signature
  - `left` - the left value
  - `right` - the right value
- `sequence` - a `string` or `array` to traverse.

## Browser Usage

There is a UMD build provided in the "dist" folder. `bracketing` should have no issues working in a browser context. The only potential "got ya" is that accessing a string using bracket notation, which this module does, will not work in Internet Explorer 7.