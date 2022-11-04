"use strict";

// index.js 转译后的结果
var obj = {
    rex: /\d/,
    checkArray: function checkArray(array) {
      var _this = this;
      return array.some(function (entry) {
        return _this.rex.test(entry);
      });
    }
  };
  console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
  console.log(obj.checkArray(["this", "array", "has", "1", "digits"])); // true
