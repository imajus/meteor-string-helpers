# Overview

Some Meteor Blaze helpers for string manipulation.

# Installation

```sh
meteor add imajus:string-helpers
```

# Related packages

* [imajus:common-helpers](https://github.com/imajus/meteor-common-helpers)
* [imajus:html-helpers](https://github.com/imajus/meteor-html-helpers)
* [imajus:bootstrap-helpers](https://github.com/imajus/meteor-bootstrap-helpers)

# Contents

Package provides following global Blaze helpers:

* `slugify(string)` – Transform text into an ascii slug which can be used in safely in URLs, HTML, etc. See more in [underscore.string docs](https://github.com/epeli/underscore.string#slugifystring--string).
* `capitalize(string, lowercaseRest)` – Converts first letter of the string to uppercase. If true is passed as second argument the rest of the string will be converted to lower case. See more in [underscore.string docs](https://github.com/epeli/underscore.string#capitalizestring-lowercaserestfalse--string).
* `concat(...args)` – Join arguments intro a single string.