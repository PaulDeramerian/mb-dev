incrnum
=======
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

incrnum provided an incremented number. It can be coerced to a string and the result will be an icremented number. It can be called as a function to return an incremented number.

Coerce incrnum to a string or call it as a function:

```javascript
console.log('hello ' + incrnum + ' goodbye ' + incrnum); // hello 0 goodbye 1
console.log(incrnum()); // 2
```

The source code:

```javascript
var incrnum = ((typeof module === 'object') ? module : {}).exports = (function (uid, fn) {
    fn = function () { return uid++; };
    fn.toString = function () { return uid++; };
    return fn;
}(0));
```

---------------------------------------------------------
#### <a id="install"></a>Install:

incrnum may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install incrnum
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/incrnum.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------

#### <a id="license">License:

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
