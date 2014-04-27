## XHR Helper functions for the browser

Some helper functions for handling cookies in the browser.

## Browser Install

#### Method 1:

Simply require `xhr.js` in your HTML.


####Method 2:

    bower install clusterfoo/xhr-helpers

## How to Use

####Method 1:

If you are using [browserify](http://browserify.org/), simply

```js
var XHR = require('clusterfoo.url-helpers');
var xhr = new XHR.handler("some_url");
```

Please use browserify.

#### Method 2:


```html
<script src="/path/to/xhr.js"></script>
<script>
    // initialize xhr.js
    Clusterfoo();
</script>
```

This will make the `Clusterfoo.xhr` object available globally:

```js
var xhr = new Clusterfoo.xhr.handler("some_url");
```

## API

First, you must initialize an XHR handler with a given url:

```js
var xhr = new XHR.handler("http://example.com");
```

#### xhr.post(path, body, fn)

Post, with a callback function for handling respons:

```js
xhr.post("/some/path", { id: "123" }, function(err, object){
    if (err) freakOut();
    handleResponse(object);
});
```

#### xhr.get(path,fn)

```js
xhr.get("/some/path", function(err, object){
    if (err) freakOut();
    handleResponse(object);
});
```
---

The MIT License (MIT)

Copyright (c) 2014 Noam Gagliardi-Rabinovich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
