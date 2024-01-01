// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var i;if(!t(r))throw new TypeError(e("invalid argument. Must provide an iterator. Value: `%s`.",r));if(!(i=r.next()).done)return i.value}export{r as default};
//# sourceMappingURL=index.mjs.map
