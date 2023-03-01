<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterFirst

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the first [iterated][mdn-iterator-protocol] value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterFirst from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-first@esm/index.mjs';
```

#### iterFirst( iterator )

Returns the first [iterated][mdn-iterator-protocol] value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var arr = array2iterator( [ 1, 0, 0, 0, 0 ] );

var v = iterFirst( arr );
// returns 1
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any [iterated][mdn-iterator-protocol] values, the function returns `undefined`.

```javascript
import iterEmpty from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-empty@esm/index.mjs';

var v = iterFirst( iterEmpty() );
// returns undefined
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** consume an entire [iterator][mdn-iterator-protocol] before returning.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@esm/index.mjs';
import iterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-map@esm/index.mjs';
import iterFirst from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-first@esm/index.mjs';

function threshold( r ) {
    return ( r > 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Create an iterator which applies a threshold to generated numbers:
var miter = iterMap( riter, threshold );

// Return the first threshold result:
var bool = iterFirst( miter );
// returns <boolean>

console.log( bool );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-head`][@stdlib/iter/head]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the first `n` values of a provided iterator.</span>
-   <span class="package-name">[`@stdlib/iter-last`][@stdlib/iter/last]</span><span class="delimiter">: </span><span class="description">consume an entire iterator and return the last iterated value.</span>
-   <span class="package-name">[`@stdlib/iter-nth`][@stdlib/iter/nth]</span><span class="delimiter">: </span><span class="description">return the nth iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-first.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-first

[test-image]: https://github.com/stdlib-js/iter-first/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-first/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-first/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-first?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-first.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-first/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-first/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-first/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-first/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-first/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-first/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/head]: https://github.com/stdlib-js/iter-head/tree/esm

[@stdlib/iter/last]: https://github.com/stdlib-js/iter-last/tree/esm

[@stdlib/iter/nth]: https://github.com/stdlib-js/iter-nth/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
