// Filename: incrnum.js  
// Timestamp: 2013.10.22-11:32:49 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var incrnum = ((typeof module === 'object') ? module : {}).exports = (function (uid, fn) {
  
  fn = function () { return uid++; };
  fn.toString = function () { return uid++; };

  return fn;

}(0));
