# quick-minifier <img src="https://badgen.net/npm/v/quick-minifier"/> <img src="https://badgen.net/npm/license/quick-minifier"/> <img src="https://badgen.net/npm/node/quick-minifier"/> <img src="https://badgen.net/npm/dt/quick-minifier"/>

## Contents

  * [About](#about)
  * [Installation](#installation)
  * [Examples](#examples)
    * [JavaScript](#javascript)
    * [CSS](#css)

## About

Quickly JavaScript and CSS minifier using Toptal API.

## Installation

```sh-session
npm install quick-minifier
```

## Examples

### JavaScript

```js
const quickminifier = require("quick-minifier");
var code = `
  $(function() {
    $("#app").html("Hello, World!");
  });
`;

quickminifier.js(code).then(minified_code => {
  console.log(minified_code);
  /*
    $(function(){$("#app").html("Hello, World!")});
  */
}).catch(err => {
  console.error(err);
});
```

### CSS

```js
const quickminifier = require("quick-minifier");
var code = `
  body {
    text-align: center;
    font-family: arial;
    font-size: 16px
  }

  h1 {
    color: #2E2EFF;
  }
`;

quickminifier.css(code).then(minified_code => {
  console.log(minified_code);
  /*
    body{text-align:center;font-family:arial;font-size:16px}h1{color:#2e2eff}
  */
}).catch(err => {
  console.error(err);
});
```

## License

[MIT](LICENSE.md)