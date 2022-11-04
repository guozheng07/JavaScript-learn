var obj = {
    rex: /\d/,
    checkArray: function(array) {
        // 使用了 ES2015+ 的箭头函数
        return array.some(entry => this.rex.test(entry));
    }
};

console.log(obj.checkArray(["no", "digits", "in", "this", "array"])); // false
console.log(obj.checkArray(["this", "array", "has", "1",  "digits"])); // true
